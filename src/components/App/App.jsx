
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Loading from '../Loading/Loading';
import Layout from '../Layout/Layout';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { refreshUser } from '../../redux/auth/operations';
import {
  selectIsRefreshing,
  selectIsAuthenticated,
} from '../../redux/auth/selectors';

const WellcomePage = lazy(() =>
  import('../../pages/WellcomePage/WellcomePage')
);
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const SignupPage = lazy(() => import('../../pages/SignupPage/SignupPage'));
const SigninPage = lazy(() => import('../../pages/SigninPage/SigninPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsAuthenticated);
  const [username, setUsername] = useState('');

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const handleSuccess = name => {
    setUsername(name);
  };

  return isRefreshing ? (
    <Loading />
  ) : (
    <Layout username={username}>
      {' '}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <HomePage />
              ) : (
                <WellcomePage />
              )
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/signin"
            element={
              <RestrictedRoute component={<SigninPage />} redirectTo="/" />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                component={<SignupPage onSuccess={handleSuccess} />}
                redirectTo="/signin"
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
};

export default App;
