import { Navigate, useLocation } from "react-router-dom";
import Authfun from "../provider/Authfun";

function Privaterouter({ children }) {
  const { user, loading } = Authfun();
  const location = useLocation();

  if (loading) return <h1>loading....</h1>;
  if (user) return children;
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
}

export default Privaterouter;
