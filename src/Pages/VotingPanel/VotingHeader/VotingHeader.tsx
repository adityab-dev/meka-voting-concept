import bjp from "../../Assets/bjp.png";

import { MdExpandLess } from "react-icons/md";
import { OnChange } from "../../../Types/voting-candidate";

export default function VotingHeader(props: { clickHandler: (event: OnChange) => void }) {
  return (
    <div className="vote-candidate-header">
      <div className="vote-candidate-left">
        <input
          className="vote-radios"
          type="radio"
          value="baburao"
          id="baburao"
          name="baburao"
          // onChange={(event) => clickHandler(event)}
        />
      </div>

      <div className="vote-candidate-mid">
        <label className="vote-candidate-font" htmlFor="baburao">
          baburao
        </label>
        <div className="vote-candidate-font">Independent</div>
        <img src={bjp} alt="independent" height={"50px"} width={"50px"} />
      </div>
      <div className="vote-candidate-right">
        <div className="vote-expand">
          <MdExpandLess />
        </div>
      </div>
    </div>
  );
}
