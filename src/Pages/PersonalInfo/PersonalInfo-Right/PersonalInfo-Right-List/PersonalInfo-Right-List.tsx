import { persnalInfoNamesArray } from "../../../../constants/reg-input";

import { useContext } from "react";

import login_context from "../../../../Context/Login-Context/login-context";

export default function PersonalInfoRightList() {
  const { docsData } = useContext(login_context);

  return (
    <>
      {persnalInfoNamesArray.map((name) => {
        return (
          <li key={name}>
            <label className="user-right-labels" htmlFor={name}>
              {name}
            </label>
            <div id={name} style={{ color: "white", fontSize: "1.5rem", paddingBottom: "2.5rem" }}>
              {docsData[name]}
            </div>
          </li>
        );
      })}
    </>
  );
}
