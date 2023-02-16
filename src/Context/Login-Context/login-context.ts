import React from "react";
import { EMAIL, PASSWORD } from "../../constants/reg-input";

import { registerationData, LoginCredentials } from "../../Types/Types";
import { OnChange } from "../../Types/voting-candidate";

export type LoginContextValues = {
  inputValues: LoginCredentials;
  docsData: registerationData;
  formSubmitHandler: (event: React.FormEvent) => void;
  inputChangeHandler: (event: OnChange) => void;
  setDocsStateHandler: (newDocsState: DocsData) => void;
};

export type DocsData = registerationData;

export const docsData: DocsData = {
  "Adhar Number": "",
  Email: "",
  Password: "",
  "Re-enter Password": "",
  Name: "",
  "Date Of Birth": "",
  "Father's or Mother's Name": "",
  "Mobile No": "",
  hasAcceptedRules: false,
  hasVoted: false,
  votedFor: "",
  userID: "",
};

export const initialInputValues: LoginCredentials = {
  [EMAIL]: "",
  [PASSWORD]: "",
};

const login_context = React.createContext<LoginContextValues>({
  docsData,
  inputValues: initialInputValues,
  formSubmitHandler: (event: React.FormEvent): void => {},
  inputChangeHandler: (event: OnChange): void => {},
  setDocsStateHandler: (newDocsState: DocsData) => {},
});

export default login_context;
