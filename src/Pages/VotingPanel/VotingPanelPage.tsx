import "./VotingPanelPage.css";
import VotingPanelCandidates from "./VotingPanelCandidated/VotingPanelCandidated";

import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import votingContext from "../../Context/Voting-Context/voting-context";
import login_context from "../../Context/Login-Context/login-context";

import { personalInfoPath } from "../../constants/Paths";

export type HasVotedInElection = 0 | 1;

function VotingPanelPage() {
  const { updateVotingData, getElectionName } =
    useContext(votingContext);

  const {
    docsData: { electinData },
  } = useContext(login_context);

  const navigate = useNavigate();

  const { electionID } = useParams();

  const filteredArr = electinData.filter(
    (el) => el.electionName === electionID
  );

  let hasVoted: boolean;

  if (!filteredArr.length) hasVoted = false;
  else hasVoted = filteredArr[0].hasVoted;

  useEffect(() => {
    if (!electionID) getElectionName("");
    else getElectionName(electionID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [electionID]);

  return (
    <section className="voting-container">
      <div className="vote-center">
        <h1 className="vote-heading">Voting Panel</h1>
        <VotingPanelCandidates />
        <button
          className={`vote-center-btn ${
            hasVoted ? "vote-center-btn-disabled" : ""
          }`}
          onClick={() => {
            updateVotingData();
            navigate(personalInfoPath);
          }}
          disabled={hasVoted}
        >
          Vote
        </button>
      </div>
    </section>
  );
}

export default VotingPanelPage;
