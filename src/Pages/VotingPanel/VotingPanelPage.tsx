import "./VotingPanelPage.css";

// import { MdExpandLess } from "react-icons/md";

// import { votingList } from "../../constants/voting-list";

import { useState } from "react";
import { OnChange } from "../../Types/voting-candidate";
import VotingPanelCandidated from "./VotingPanelCandidated/VotingPanelCandidated";

const initialState = { value: "" };

export default function VotingPanelPage() {
  const [state, setState] = useState<{ value: string }>(initialState);

  function clickHandler(event: OnChange) {
    const { value: CANDIDATE_NAME } = event.target;

    setState((prevState) => {
      return { ...prevState, value: CANDIDATE_NAME };
    });
  }

  return (
    <section className="voting-container">
      <div className="vote-center">
        <h1 className="vote-heading">Voting Panel</h1>
        <VotingPanelCandidated state={state} onRadioClick={clickHandler} />
      </div>
    </section>
  );
}
