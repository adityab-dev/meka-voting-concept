import React from "react";
import { docsData, initialLoginInputValues } from "../../constants/init_constants";

import { registerationData, LoginCredentials } from "../../Types/Types";
import { OnChange } from "../../Types/voting-candidate";

export type LoginContextValues = {
  inputValues: LoginCredentials;
  docsData: registerationData;
  formSubmitHandler: (event: React.FormEvent) => void;
  inputChangeHandler: (event: OnChange) => void;
  setDocsStateHandler: (newDocsState: registerationData) => void;
};

const login_context = React.createContext<LoginContextValues>({
  docsData: docsData,
  inputValues: initialLoginInputValues,
  formSubmitHandler: (event: React.FormEvent): void => {},
  inputChangeHandler: (event: OnChange): void => {},
  setDocsStateHandler: (newDocsState: registerationData) => {},
});

export default login_context;
