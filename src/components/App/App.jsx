import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from '../../Redax/Auth/operations';
import { useAuth } from '../../hooks/hooks';
import { NotFound } from 'Pages/NotFound';

const HomePage = lazy(() => import('../../Pages/Home'));
const RegisterPage = lazy(() => import('../../Pages/Register'));
const LoginPage = lazy(() => import('../../Pages/Login'));
const ContactsPage = lazy(() => import('../../Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>

      <Route index element={<HomePage />} />

      <Route
        path="/register"
        element={
          <RestrictedRoute
            redirectTo="/contacts"
            component={<RegisterPage />}
          />
        }
      />

      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        }
      />

      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
