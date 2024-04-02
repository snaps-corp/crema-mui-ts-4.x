import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Auth from '@aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { awsConfig } from './aws-exports';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { AuthUserType } from '@crema/types/models/AuthUser';

interface AwsCognitoContextProps {
  user: AuthUserType | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

interface SignInProps {
  email: string;
  password: string;
}

interface AwsCognitoActionsProps {
  signUpCognitoUser: (data: SignUpProps) => void;
  signIn: (data: SignInProps) => void;
  confirmCognitoUserSignup: (username: string, code: string) => void;
  forgotPassword: (username: string, code: string) => void;
  logout: () => void;
}

const AwsCognitoContext = createContext<AwsCognitoContextProps>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
});
const AwsCognitoActionsContext = createContext<AwsCognitoActionsProps>({
  signUpCognitoUser: () => {},
  signIn: () => {},
  confirmCognitoUserSignup: () => {},
  forgotPassword: () => {},
  logout: () => {},
});
export const useAwsCognito = () => useContext(AwsCognitoContext);

export const useAwsCognitoActions = () => useContext(AwsCognitoActionsContext);

interface AwsAuthProviderProps {
  children: ReactNode;
}

const AwsAuthProvider: React.FC<AwsAuthProviderProps> = ({ children }) => {
  const [awsCognitoData, setAwsCognitoData] = useState<AwsCognitoContextProps>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const infoViewActionsContext = useInfoViewActionsContext();
  const navigate = useNavigate();

  const auth = useMemo(() => {
    Auth.configure(awsConfig);
    return Auth;
  }, []);

  useEffect(() => {
    auth
      .currentAuthenticatedUser()
      .then((user) =>
        setAwsCognitoData({
          user,
          isAuthenticated: true,
          isLoading: false,
        }),
      )
      .catch(() =>
        setAwsCognitoData({
          user: undefined,
          isAuthenticated: false,
          isLoading: false,
        }),
      );
  }, [auth]);

  const signIn = async ({ email, password }: SignInProps) => {
    infoViewActionsContext.fetchStart();
    try {
      const user = await Auth.signIn(email, password);
      console.log('user: ', user);
      infoViewActionsContext.fetchSuccess();
      setAwsCognitoData({
        user,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (error: any) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
      infoViewActionsContext.fetchError(error.message as string);
    }
  };
  const signUpCognitoUser = async ({ email, password, name }: SignUpProps) => {
    infoViewActionsContext.fetchStart();
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
        },
      });
      infoViewActionsContext.fetchSuccess();
      navigate('/confirm-signup', { state: email });

      infoViewActionsContext.showMessage(
        'A code has been sent to your registered email address, Enter the code to complete the signup process!',
      );
    } catch (error: any) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
      infoViewActionsContext.fetchError(error.message as string);
    }
  };
  const confirmCognitoUserSignup = async (username: string, code: string) => {
    infoViewActionsContext.fetchStart();
    try {
      await Auth.confirmSignUp(username, code, {
        forceAliasCreation: false,
      });
      navigate('/signin', { replace: true });
      infoViewActionsContext.showMessage(
        'Congratulations, Signup process is complete, You can now Sign in by entering correct credentials!',
      );
    } catch (error: any) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
      infoViewActionsContext.fetchError(error.message as string);
    }
  };
  const forgotPassword = async (username: string, code: string) => {
    infoViewActionsContext.fetchStart();
    try {
      await Auth.confirmSignUp(username, code, {
        forceAliasCreation: false,
      });
      navigate('/signin', { replace: true });
      infoViewActionsContext.showMessage(
        'Congratulations, Signup process is complete, You can now Sign in by entering correct credentials!',
      );
    } catch (error: any) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
      infoViewActionsContext.fetchError(error.message as string);
    }
  };

  const logout = async () => {
    setAwsCognitoData({ ...awsCognitoData, isLoading: true });
    try {
      await auth.signOut();
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch (error) {
      setAwsCognitoData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  return (
    <AwsCognitoContext.Provider
      value={{
        ...awsCognitoData,
      }}
    >
      <AwsCognitoActionsContext.Provider
        value={{
          logout,
          signIn,
          signUpCognitoUser,
          confirmCognitoUserSignup,
          forgotPassword,
        }}
      >
        {children}
      </AwsCognitoActionsContext.Provider>
    </AwsCognitoContext.Provider>
  );
};

export default AwsAuthProvider;
