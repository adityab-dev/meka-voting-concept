import {
  NAME,
  DOB,
  PARENT_NAME,
  EMAIL,
  MOBILE_NUM,
  PASSWORD,
  RE_PASSWORD,
  ADHAR_NUM,
} from "../constants/reg-input";
import { OnChange } from "./voting-candidate";

import { election, date } from "../constants/voting-form ";

export type ElectionDataItem = {
  electionName: string;
  hasAccptedRules: boolean;
  hasVoted: boolean;
  votedFor: string;
};

export type registerationData = {
  [NAME]: string;
  [DOB]: string;
  [PARENT_NAME]: string;
  [EMAIL]: string;
  [MOBILE_NUM]: string;
  [PASSWORD]: string;
  [RE_PASSWORD]: string;
  [ADHAR_NUM]: string;
  electinData: ElectionDataItem[];
  // hasAcceptedRules: boolean;
  // hasVoted: boolean;
  // votedFor: string;
};

export type LoginCredentials = {
  [EMAIL]: string;
  [PASSWORD]: string;
};

export type FormEvent = React.FormEvent;

export type RegisterationContextType = {
  registerInputChangeHandler: (event: OnChange) => void;
  registerFormSubmitHandler: (event: FormEvent) => void;
  registrationData: registerationData;
};

export type Election = {
  [election]: string;
  [date]: string;
};
