import { Outlet } from "react-router-dom";

import CommonHeader from "./Header/CommonHeader";

export default function HeaderNavLayout() {
  return (
    <div className="info-container viewport-height-width">
      <CommonHeader />
      <Outlet />
    </div>
  );
}
