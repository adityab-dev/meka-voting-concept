import { votingList } from "../../../constants/voting-list";
import { OnChange } from "../../../Types/voting-candidate";
import CandidateDescription from "./Candidate-Description/Candidate-Description";

import CandidateLeft from "./Candidate-Left/Candidate-Left";
import CandidateMid from "./Candidate-Mid/Candidate-Mid";
import CandidatesRight from "./Candidates-Right/Candidates-Right";

export default function VotingPanelCandidates(props: {
  votingCandidatesProp: { onRadioClick: (event: OnChange) => void; value: string };
}) {
  const { onRadioClick, value } = props.votingCandidatesProp;

  return (
    <>
      {votingList.map((candidate) => {
        const { name, education, affiliation, age, logo } = candidate;

        const candidateLeftProps = { onRadioClick, name };
        const candidateMidProps = { name, affiliation, logo };
        const candidateDescriptionProps = {
          value,
          name,
          age,
          affiliation,
          education,
        };

        return (
          <div key={name} style={{ paddingBottom: "2rem" }}>
            <div
              className={`vote-candidate-header candidate-white ${
                value === name ? "vote-candidate-border candidate-gray" : ""
              }`}
            >
              <CandidateLeft candidatesleftProps={candidateLeftProps} />
              <CandidateMid candidateMidProps={candidateMidProps} />
              <CandidatesRight />
            </div>

            <CandidateDescription candidateDescriptionProps={candidateDescriptionProps} />
          </div>
        );
      })}
    </>
  );
}
