import React, { ReactNode } from 'react';
import AppLoader from './AppLoader';
import { useAuthUser } from '@crema/hooks/AuthHooks';

type AuthRoutesProps = {
  children: ReactNode;
};

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const { isLoading } = useAuthUser();
  return isLoading ? <AppLoader /> : <>{children}</>;
};

export default AuthRoutes;
