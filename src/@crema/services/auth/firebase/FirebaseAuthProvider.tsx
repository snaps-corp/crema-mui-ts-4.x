import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  twitterAuthProvider,
  updateProfile,
} from "./firebase";
import { AuthUserType } from "@crema/types/models/AuthUser";
import { useInfoViewActionsContext } from "../../../context/AppContextProvider/InfoViewContextProvider";

interface FirebaseContextProps {
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

interface FirebaseActionsProps {
  registerUserWithEmailAndPassword: (data: SignUpProps) => void;
  logInWithEmailAndPassword: (data: SignInProps) => void;
  logInWithPopup: (type: string) => void;
  logout: () => void;
}

const FirebaseContext = createContext<FirebaseContextProps>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
});
const FirebaseActionsContext = createContext<FirebaseActionsProps>({
  registerUserWithEmailAndPassword: () => {},
  logInWithEmailAndPassword: () => {},
  logInWithPopup: () => {},
  logout: () => {},
});

export const useFirebase = () => useContext(FirebaseContext);

export const useFirebaseActions = () => useContext(FirebaseActionsContext);

interface FirebaseAuthProviderProps {
  children: ReactNode;
}

const FirebaseAuthProvider: React.FC<FirebaseAuthProviderProps> = ({
  children,
}) => {
  const { fetchStart, fetchSuccess, fetchError } = useInfoViewActionsContext();
  const [firebaseData, setFirebaseData] = useState<FirebaseContextProps>({
    user: undefined,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    fetchStart();
    const getAuthUser = auth.onAuthStateChanged(
      (user) => {
        setFirebaseData({
          user: user as AuthUserType,
          isAuthenticated: Boolean(user),
          isLoading: false,
        });
        fetchSuccess();
      },
      () => {
        fetchSuccess();
        setFirebaseData({
          user: firebaseData.user,
          isLoading: false,
          isAuthenticated: false,
        });
      },
      () => {
        fetchSuccess();
        setFirebaseData({
          user: firebaseData.user,
          isLoading: false,
          isAuthenticated: true,
        });
      },
    );

    return () => {
      getAuthUser();
    };
  }, [firebaseData.user]);

  const getProvider = (providerName: string) => {
    switch (providerName) {
      case "google": {
        return googleAuthProvider;
      }
      case "facebook": {
        return facebookAuthProvider;
      }
      case "twitter": {
        return twitterAuthProvider;
      }
      case "github": {
        return githubAuthProvider;
      }
      default:
        return googleAuthProvider;
    }
  };

  const logInWithPopup = async (providerName: string) => {
    fetchStart();
    try {
      const { user } = await signInWithPopup(auth, getProvider(providerName));
      setFirebaseData({
        user: user as AuthUserType,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error: any) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error.message as string);
    }
  };

  const logInWithEmailAndPassword = async ({
    email,
    password,
  }: SignInProps) => {
    fetchStart();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setFirebaseData({
        user: user as AuthUserType,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error: any) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error.message as string);
    }
  };
  const registerUserWithEmailAndPassword = async ({
    name,
    email,
    password,
  }: SignUpProps) => {
    fetchStart();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await sendEmailVerification(auth.currentUser!, {
        url: window.location.href,
        handleCodeInApp: true,
      });
      await updateProfile(auth.currentUser!, {
        displayName: name,
      });
      setFirebaseData({
        user: { ...user, displayName: name } as AuthUserType,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error: any) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error.message as string);
    }
  };

  const logout = async () => {
    setFirebaseData({ ...firebaseData, isLoading: true });
    try {
      await auth.signOut();
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch (error) {
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <FirebaseActionsContext.Provider
        value={{
          logInWithEmailAndPassword,
          registerUserWithEmailAndPassword,
          logInWithPopup,
          logout,
        }}
      >
        {children}
      </FirebaseActionsContext.Provider>
    </FirebaseContext.Provider>
  );
};
export default FirebaseAuthProvider;
