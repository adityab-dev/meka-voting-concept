import { AiOutlineEdit } from "react-icons/ai";

import profile from "../../../Assets/profile-img.jpg";

import "../../PersonalInfo/PersonalInfo.css";

export default function PersonalInfoLeft() {
  return (
    <aside className="user-left">
      <img className="user-left-img" src={profile} alt="Profile" />
      <button className="user-left-btn" type="button">
        Change Profile Picture
      </button>
      <div className="user-left-edit">
        <AiOutlineEdit />
        <p className="user-left-p">Edit Profile</p>
      </div>
    </aside>
  );
}
