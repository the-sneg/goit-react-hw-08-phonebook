import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export const PublickRoutes = () => {
  const { isloggedIn } = useSelector(state => state.userSlice);

  return isloggedIn ? <Navigate to="/contacts" replace /> : <Outlet />;
};
