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
  userID: "",
};

export const initialInputValues: LoginCredentials = {
  [EMAIL]: "",
  [PASSWORD]: "",
};
