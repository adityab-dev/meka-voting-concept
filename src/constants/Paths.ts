const enum Paths {
  HEADER = "/",
  REGISTER = "/register",
  LOGIN = "/login",
  PERSONAL_INFO = "/personalInfo",
  ELECTIONS = "/elections",
  RULES = "/rules",
  VOTING = "/voting",
}

export const headerPath = Paths.HEADER;
export const registerPath = Paths.REGISTER;
export const loginPath = Paths.LOGIN;
export const personalInfoPath = Paths.PERSONAL_INFO;
export const electionsPath = Paths.PERSONAL_INFO + Paths.ELECTIONS;
export const rulesPath = Paths.RULES;
export const votingPath = Paths.VOTING;

export const pathsArray = [
  headerPath,
  loginPath,
  registerPath,
  personalInfoPath,
  electionsPath,
  rulesPath,
  votingPath,
];

export const personalInfoNavigation = [personalInfoPath, electionsPath, "", votingPath];
