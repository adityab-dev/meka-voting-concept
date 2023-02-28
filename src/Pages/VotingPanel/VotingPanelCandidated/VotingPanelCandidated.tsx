import CandidateDescription from "./Candidate-Description/Candidate-Description";

import CandidateLeft from "./Candidate-Left/Candidate-Left";
import CandidateMid from "./Candidate-Mid/Candidate-Mid";
import CandidatesRight from "./Candidates-Right/Candidates-Right";

import { useContext } from "react";
import votingContext from "../../../Context/Voting-Context/voting-context";

import { votingList } from "../../../constants/voting-list";

function VotingPanelCandidates() {
  const {
    electionDataItem: { electionName },
  } = useContext(votingContext);

  return (
    <>
      {votingList.map((candidate) => {
        const { name, education, affiliation, age, logo } =
          candidate;

        const candidateLeftProps = { name };

        const candidateMidProps = {
          name,
          affiliation,
          logo,
        };

        const candidateDescriptionProps = {
          name,
          age,
          affiliation,
          education,
        };

        return (
          <div
            key={name}
            style={{ paddingBottom: "2rem" }}
          >
            <div
              className={`vote-candidate-header candidate-white ${
                electionName === name
                  ? "vote-candidate-border candidate-gray"
                  : ""
              }`}
            >
              <CandidateLeft
                candidatesleftProps={candidateLeftProps}
              />

              <CandidateMid
                candidateMidProps={candidateMidProps}
              />

              <CandidatesRight />
            </div>

            <CandidateDescription
              candidateDescriptionProps={
                candidateDescriptionProps
              }
            />
          </div>
        );
      })}
    </>
  );
}

export default VotingPanelCandidates;
