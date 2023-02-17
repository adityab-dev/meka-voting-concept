import React from "react";

import { OnChange } from "../../Types/voting-candidate";
import { FormEvent, RegisterationContextType } from "../../Types/Types";

import { docsData } from "../../constants/init_constants";

const registerationContext = React.createContext<RegisterationContextType>({
  registerInputChangeHandler: (event: OnChange): void => {},
  registerFormSubmitHandler: (event: FormEvent): void => {},
  registrationData: docsData,
});

export default registerationContext;
