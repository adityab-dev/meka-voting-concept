import { adminElections, adminOversightPath, adminPath, loginPath } from "../constants/Paths";

import AdminOversightContextProvider from "../Context/AdminOversight-Context/AdminOversightContextProver";
import ElectionContextProvider from "../Context/Election-Context/ElectionContextProvider";

import HeaderNavLayout from "../Layouts/HeaderNavLayot/HeaderNavLayot";
import AdminOversight from "../Pages/Admin-Oversight/Admin-Oversight";
import ElectionPage from "../Pages/Election/ElectionPage";
import LoginPage from "../Pages/Login/Login";
import PersonInfoPage from "../Pages/PersonalInfo/PersonalInfo";

const adminRouter = [
  { path: loginPath, element: <LoginPage /> },
  {
    path: adminPath,
    element: <HeaderNavLayout />,
    children: [
      {
        index: true,
        element: <PersonInfoPage />,
      },
      {
        path: adminElections,
        element: (
          <ElectionContextProvider>
            <ElectionPage />
          </ElectionContextProvider>
        ),
      },
    ],
  },
  {
    path: adminOversightPath,
    element: (
      <AdminOversightContextProvider>
        <AdminOversight />
      </AdminOversightContextProvider>
    ),
  },
  {
    path: "/*",
    element: <LoginPage />,
  },
];

export default adminRouter;
