import { useContext } from "react";
import votingContext from "../../../../Context/Voting-Context/voting-context";

export type CandidateDescriptionProps = {
  name: string;
  age: number;
  affiliation: string;
  education: string;
};

function CandidateDescription(props: {
  candidateDescriptionProps: CandidateDescriptionProps;
}) {
  const {
    electionDataItem: { electionName },
  } = useContext(votingContext);

  const { name, age, affiliation, education } =
    props.candidateDescriptionProps;

  return (
    <>
      {electionName === name ? (
        <div className="voter-candidate-body">
          <div className="voter-candidate-body-center">
            <div>Name : {name}</div>
            <div>Age : {age}</div>
            <div>Party : {affiliation}</div>
            <div>Education : {education}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CandidateDescription;
