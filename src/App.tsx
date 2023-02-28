import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

import "./App.css";

import votersRouter from "./Routers/voter-router";
import adminRouter from "./Routers/admin-router";

import { useContext } from "react";
import login_context from "./Context/Login-Context/login-context";

function App() {
  const {
    docsData: { Name },
  } = useContext(login_context);

  let routerInstance: RouteObject[];

  if (Name !== "ADMIN") routerInstance = votersRouter;
  else routerInstance = adminRouter;

  const router = createBrowserRouter(routerInstance);

  return <RouterProvider router={router} />;
}

export default App;
