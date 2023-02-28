import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginContextProvider from "./Context/Login-Context/LoginContextProvider";
import VotingContextProvider from "./Context/Voting-Context/VotingContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <LoginContextProvider>
    <VotingContextProvider>
      <App />
    </VotingContextProvider>
  </LoginContextProvider>
);
