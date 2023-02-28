import { Outlet } from "react-router-dom";

import CommonHeader from "./Header/CommonHeader";

import { useContext } from "react";
import login_context from "../../Context/Login-Context/login-context";

import { Navigate } from "react-router-dom";
import { loginPath } from "../../constants/Paths";

export default function HeaderNavLayout() {
  const { docsData } = useContext(login_context);

  return !docsData.Email ? (
    <Navigate to={loginPath} />
  ) : (
    <div className="info-container">
      <CommonHeader />
      <Outlet />
    </div>
  );
}
