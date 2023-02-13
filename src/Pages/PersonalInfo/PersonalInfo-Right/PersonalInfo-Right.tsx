import { persnalInfoNamesArray } from "../../../constants/reg-input";

export default function PersonalInfoRight() {
  return (
    <section className="user-right">
      <ul className="user-right-list">
        {persnalInfoNamesArray.map((name) => {
          return (
            <li key={name}>
              <label className="user-right-labels" htmlFor={name}>
                {name}
              </label>
            </li>
          );
        })}
        <li className="user-right-btm">
          <div>
            <label htmlFor="eligible">Eligible</label>
            <div className="user-right-btm-val" id="eligible">
              True
            </div>
          </div>
          <div>
            <label htmlFor="verified">Verified</label>
            <div className="user-right-btm-val" id="verified">
              True
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
