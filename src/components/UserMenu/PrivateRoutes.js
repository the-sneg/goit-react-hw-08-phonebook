import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
  const { isloggedIn } = useSelector(state => state.userSlice);

  return isloggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
