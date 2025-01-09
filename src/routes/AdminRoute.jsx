import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import UseAuth from "../hooks/UseAuth";


const AdminRoute = ({ children }) => {
    const {user, loading} = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
          <div className="flex min-h-screen justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        );
      }
    
      if (user && isAdmin) {
        return children;
      }
    
      return <Navigate state={location.pathname} to="/login"></Navigate>;
    };

export default AdminRoute;