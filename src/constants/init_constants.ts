import { Election, ElectionDataItem, LoginCredentials, registerationData } from "../Types/Types";
import { EMAIL, PASSWORD } from "./reg-input";

export const initialElectionDataItem: ElectionDataItem = {
  electionName: "",
  hasAccptedRules: false,
  hasVoted: false,
  votedFor: "",
};

export const initialRegisterValues: registerationData = {
  Name: "",
  "Date Of Birth": "",
  "Father's or Mother's Name": "",
  Email: "",
  "Mobile No": "",
  Password: "",
  "Re-enter Password": "",
  "Adhar Number": "",
  electinData: [initialElectionDataItem],
};

export const initialLoginInputValues: LoginCredentials = {
  [EMAIL]: "",
  [PASSWORD]: "",
};

export const docsData: registerationData = {
  "Adhar Number": "",
  Email: "",
  Password: "",
  "Re-enter Password": "",
  Name: "",
  "Date Of Birth": "",
  "Father's or Mother's Name": "",
  "Mobile No": "",
  electinData: [initialElectionDataItem],
};

export const initialElectionEvent: Election = {
  election: "",
  date: "",
};
