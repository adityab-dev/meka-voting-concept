import {
  electionsPath,
  headerPath,
  loginPath,
  personalInfoPath,
  registerPath,
  rulesPath,
  votingPath,
} from "../constants/Paths";
import ElectionContextProvider from "../Context/Election-Context/ElectionContextProvider";
import RegisterContextProvider from "../Context/Register-Context/RegisterContextProvider";

import HeaderNavLayout from "../Layouts/HeaderNavLayot/HeaderNavLayot";
import ElectionPage from "../Pages/Election/ElectionPage";
import HeaderPage from "../Pages/Header/Header";
import LoginPage from "../Pages/Login/Login";
import PersonInfoPage from "../Pages/PersonalInfo/PersonalInfo";
import RegistrationPage from "../Pages/Registration/Registration";
import RulesPage from "../Pages/Rules/RulesPage";
import VotingPanelPage from "../Pages/VotingPanel/VotingPanelPage";

const votersRouter = [
  {
    path: "/*",
    element: <LoginPage />,
  },
  { path: headerPath, element: <HeaderPage /> },
  {
    path: registerPath,
    element: (
      <RegisterContextProvider>
        <RegistrationPage />
      </RegisterContextProvider>
    ),
  },
  { path: loginPath, element: <LoginPage /> },
  {
    path: personalInfoPath,
    element: <HeaderNavLayout />,
    children: [
      {
        index: true,
        element: <PersonInfoPage />,
      },
      {
        path: electionsPath,
        element: (
          <ElectionContextProvider>
            <ElectionPage />
          </ElectionContextProvider>
        ),
      },
    ],
  },
  { path: rulesPath, element: <RulesPage /> },
  {
    path: "/PersonalInfo/elections/:electionID",
    element: <VotingPanelPage />,
  },
  {
    path: votingPath,
    element: <div>To be replaced</div>,
  },
];

export default votersRouter;
