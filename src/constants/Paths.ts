export const enum Paths {
  HEADER = "/",
  REGISTER = "/register",
  LOGIN = "/login",
  PERSONAL_INFO = "/personalInfo",
  ELECTIONS = "/elections",
  RULES = "/rules",
  VOTING = "/voting",
  ADMIN = "/admin",
  ADMIN_ELECTIONS = "/admin/elections",
  ADMIN_OVERSIGHT = "admin/elections/:electionID",
}

export const headerPath = Paths.HEADER;
export const registerPath = Paths.REGISTER;
export const loginPath = Paths.LOGIN;
export const personalInfoPath = Paths.PERSONAL_INFO;
export const rulesPath = Paths.PERSONAL_INFO + Paths.ELECTIONS + Paths.RULES;
export const electionsPath = Paths.PERSONAL_INFO + Paths.ELECTIONS;
export const adminElections = Paths.ADMIN_ELECTIONS;
export const votingPath = Paths.VOTING;
export const adminPath = Paths.ADMIN;
export const adminOversightPath = Paths.ADMIN_OVERSIGHT;

export const pathsArray: Array<Paths> = [
  headerPath,
  loginPath,
  registerPath,
  personalInfoPath,
  electionsPath as Paths.ELECTIONS,
  adminElections,
  rulesPath as Paths.RULES,
  votingPath,
  adminPath,
  adminOversightPath,
];

export const personalInfoNavigation = [personalInfoPath, electionsPath, "", ""];
export const adminInfoNavigation = [adminPath, adminElections, "", votingPath];
