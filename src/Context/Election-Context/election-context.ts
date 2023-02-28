import React from "react";
import { initialElectionEvent, initialRegisterValues } from "../../constants/init_constants";
import { Election, FormEvent, registerationData } from "../../Types/Types";
import { OnChange } from "../../Types/voting-candidate";

export type ElectionContextType = {
  docsData: registerationData;
  formSubmitHandler: (event: FormEvent) => void;
  inputChangeHandler: (event: OnChange) => void;
  electionList: Election[];
  showForm: boolean;
  clickHandler: (el: Election) => void;
  electionEvent: Election;
  showFormHandler: (flag: boolean) => void;
};

export const initialElectionContext: ElectionContextType = {
  docsData: initialRegisterValues,
  formSubmitHandler: (event) => {},
  inputChangeHandler: (event) => {},
  electionList: [],
  showForm: false,
  clickHandler: (el) => {},
  electionEvent: initialElectionEvent,
  showFormHandler: (flag) => {},
};

const electionContext = React.createContext<ElectionContextType>(initialElectionContext);

export default electionContext;
