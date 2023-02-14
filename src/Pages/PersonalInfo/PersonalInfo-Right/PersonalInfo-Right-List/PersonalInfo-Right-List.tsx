import { persnalInfoNamesArray } from "../../../../constants/reg-input";

export default function PersonalInfoRightList() {
  return (
    <>
      {persnalInfoNamesArray.map((name) => {
        return (
          <li key={name}>
            <label className="user-right-labels" htmlFor={name}>
              {name}
            </label>
          </li>
        );
      })}
    </>
  );
}
