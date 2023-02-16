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

export type registerationData = {
  [NAME]: string;
  [DOB]: string;
  [PARENT_NAME]: string;
  [EMAIL]: string;
  [MOBILE_NUM]: string;
  [PASSWORD]: string;
  [RE_PASSWORD]: string;
  [ADHAR_NUM]: string;
  hasAcceptedRules: boolean;
  hasVoted: boolean;
  votedFor: string;
  userID: string;
};

export type LoginCredentials = {
  [EMAIL]: string;
  [PASSWORD]: string;
};
