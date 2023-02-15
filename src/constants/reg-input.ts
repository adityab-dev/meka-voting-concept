const enum inputNames {
  NAME = "Name",
  DOB = "Date Of Birth",
  PARENT_NAME = "Father's/Mother's Name",
  EMAIL = "Email",
  MOBILE_NUM = "Mobile No.",
  PASSWORD = "Password",
  RE_PASSWORD = "Re-enter Password",
  ADHAR_NUM = "Adhar Number",
}

export const NAME = inputNames.NAME;
export const DOB = inputNames.DOB;
export const PARENT_NAME = inputNames.PARENT_NAME;
export const EMAIL = inputNames.EMAIL;
export const MOBILE_NUM = inputNames.MOBILE_NUM;
export const PASSWORD = inputNames.PASSWORD;
export const RE_PASSWORD = inputNames.RE_PASSWORD;
export const ADHAR_NUM = inputNames.ADHAR_NUM;

export const inputNamesArray = [
  NAME,
  DOB,
  PARENT_NAME,
  EMAIL,
  MOBILE_NUM,
  PASSWORD,
  RE_PASSWORD,
  ADHAR_NUM,
];

export const loginNamesArray: [typeof EMAIL, typeof PASSWORD] = [EMAIL, PASSWORD];

export const persnalInfoNamesArray = [NAME, PARENT_NAME, DOB, EMAIL, ADHAR_NUM];
