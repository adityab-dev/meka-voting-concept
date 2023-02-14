import { votingList } from "../../../constants/voting-list";
import { OnChange } from "../../../Types/voting-candidate";
import CandidateDescription from "./Candidate-Description/Candidate-Description";

import CandidateLeft from "./Candidate-Left/Candidate-Left";
import CandidateMid from "./Candidate-Mid/Candidate-Mid";
import CandidatesRight from "./Candidates-Right/Candidates-Right";

export default function VotingPanelCandidated(props: {
  onRadioClick: (event: OnChange) => void;
  state: { value: string };
}) {
  const { onRadioClick, state } = props;

  return (
    <>
      {votingList.map((candidate) => {
        const { name, education, affiliation, age, logo } = candidate;
        const candidateMidProps = { name, affiliation, logo };
        // const candidateDescriptionProps = {
        //   value: state.value,
        //   ...candidateMidProps,
        //   age,
        //   education,
        // };

        return (
          <div key={name} style={{ paddingBottom: "2rem" }}>
            <div
              className={`vote-candidate-header candidate-white ${
                state.value === name ? "vote-candidate-border candidate-gray" : ""
              }`}
            >
              <CandidateLeft name={name} onRadioClick={onRadioClick} />
              <CandidateMid candidateMidProps={candidateMidProps} />
              <CandidatesRight />
            </div>

            {state.value === name ? (
              <div className="voter-candidate-body">
                <div className="voter-candidate-body-center">
                  <div>Name : {name}</div>
                  <div>Age : {age}</div>
                  <div>Party : {affiliation}</div>
                  <div>Education : {education}</div>
                </div>
              </div>
            ) : null}
            <CandidateDescription />
          </div>
        );
      })}
    </>
  );
}
