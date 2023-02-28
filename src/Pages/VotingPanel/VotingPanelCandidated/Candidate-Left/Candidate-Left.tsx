import votingContext from "../../../../Context/Voting-Context/voting-context";
import login_context from "../../../../Context/Login-Context/login-context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { HasVotedInElection } from "../../VotingPanelPage";

function CandidateLeft(props: {
  candidatesleftProps: {
    name: string;
  };
}) {
  const { radioClickHandler } = useContext(votingContext);

  const {
    docsData: { electinData },
  } = useContext(login_context);

  const { name } = props.candidatesleftProps;

  const { electionID } = useParams();

  const electionItem = electinData.filter(
    (electionItem) => electionItem.electionName === electionID
  );

  const hasVotedInElection = electionItem.length as HasVotedInElection;

  return (
    <div className="vote-candidate-left">
      <input
        className="vote-radios"
        type="radio"
        value={name}
        id={name}
        name="candidates"
        onChange={(event) => radioClickHandler(event)}
        disabled={hasVotedInElection ? true : false}
      />
    </div>
  );
}

export default CandidateLeft;
