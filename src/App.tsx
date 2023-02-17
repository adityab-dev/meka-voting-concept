import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import ElectionPage from "./Pages/Election/ElectionPage";
import Header from "./Pages/Header/Header";
import LoginPage from "./Pages/Login/Login";
import PersonInfoPage from "./Pages/PersonalInfo/PersonalInfo";
import RegistrationPage from "./Pages/Registration/Registration";
import RulesPage from "./Pages/Rules/RulesPage";
import VotingPanelPage from "./Pages/VotingPanel/VotingPanelPage";

import {
  headerPath,
  loginPath,
  registerPath,
  personalInfoPath,
  electionsPath,
  rulesPath,
  votingPath,
} from "./constants/Paths";
import HeaderNavLayout from "./Layouts/HeaderNavLayot/HeaderNavLayot";
import RegisterContextProvider from "./Context/Register-Context/RegisterContextProvider";

function App() {
  const router = createBrowserRouter([
    { path: headerPath, element: <Header /> },
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
          element: <ElectionPage />,
        },
      ],
    },

    { path: rulesPath, element: <RulesPage /> },
    { path: votingPath, element: <VotingPanelPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
