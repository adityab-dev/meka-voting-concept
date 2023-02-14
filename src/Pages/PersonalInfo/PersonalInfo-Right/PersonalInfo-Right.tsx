import PersonalInfoRightList from "./PersonalInfo-Right-List/PersonalInfo-Right-List";

export default function PersonalInfoRight() {
  return (
    <section className="user-right">
      <ul className="user-right-list">
        <PersonalInfoRightList />
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
