import { lazy } from 'react';
import { USER_AUTH_PAGE } from '../constants/constants.route';
import { RoutesInterface } from './interface';
const AuthPage = lazy(() => import('../../pages/auth/auth.page'));

export const PUBLIC_ROUTES: RoutesInterface[] = [
  { path: USER_AUTH_PAGE, element: <AuthPage /> },
];
