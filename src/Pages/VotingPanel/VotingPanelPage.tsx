import "./VotingPanelPage.css";

// import { MdExpandLess } from "react-icons/md";

// import { votingList } from "../../constants/voting-list";

import { useState } from "react";
import { OnChange } from "../../Types/voting-candidate";
import VotingPanelCandidates from "./VotingPanelCandidated/VotingPanelCandidated";

const initialState = { value: "" };

export default function VotingPanelPage() {
  const [state, setState] = useState<{ value: string }>(initialState);

  function clickHandler(event: OnChange) {
    const { value: CANDIDATE_NAME } = event.target;

    setState((prevState) => {
      return { ...prevState, value: CANDIDATE_NAME };
    });
  }

  const votingCandidateProps = {
    onRadioClick: clickHandler,
    value: state.value,
  };

  return (
    <section className="voting-container">
      <div className="vote-center">
        <h1 className="vote-heading">Voting Panel</h1>
        <VotingPanelCandidates votingCandidatesProp={votingCandidateProps} />
      </div>
    </section>
  );
}
