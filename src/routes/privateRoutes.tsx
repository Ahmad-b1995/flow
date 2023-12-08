import {Outlet, Navigate} from "react-router-dom";
import {get} from 'local-storage'

const PrivateRoutes = () => {
  return get('user') ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
