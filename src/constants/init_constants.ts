import { LoginCredentials, registerationData } from "../Types/Types";
import { EMAIL, PASSWORD } from "./reg-input";

export const initialRegisterValues: registerationData = {
  Name: "",
  "Date Of Birth": "",
  "Father's or Mother's Name": "",
  Email: "",
  "Mobile No": "",
  Password: "",
  "Re-enter Password": "",
  "Adhar Number": "",
  hasAcceptedRules: false,
  hasVoted: false,
  votedFor: "",
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
  hasAcceptedRules: false,
  hasVoted: false,
  votedFor: "",
};
