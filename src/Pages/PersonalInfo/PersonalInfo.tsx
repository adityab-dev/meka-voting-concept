import "./PersonalInfo.css";

import PersonalInfoLeft from "./PersonalInfo-Left/PersonalInfo-Left";
import PersonalInfoRight from "./PersonalInfo-Right/PersonalInfo-Right";

export default function PersonInfoPage() {
  return (
    <main className="user-content-container">
      <PersonalInfoLeft />
      <PersonalInfoRight />
    </main>
  );
}
