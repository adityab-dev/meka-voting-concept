import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import ElectionPage from "./Pages/Election/ElectionPage";
import Header from "./Pages/Header/Header";
import LoginPage from "./Pages/Login/Login";
import PersonInfoPage from "./Pages/PersonalInfo/PersonalInfo";
import RegistrationPage from "./Pages/Registration/Registration";
import RulesPage from "./Pages/Rules/RulesPage";
import VotingPanelPage from "./Pages/VotingPanel/VotingPanelPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Header /> },
    { path: "/register", element: <RegistrationPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/personalInfo", element: <PersonInfoPage /> },
    { path: "/election", element: <ElectionPage /> },
    { path: "/rules", element: <RulesPage /> },
    { path: "/voting", element: <VotingPanelPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
