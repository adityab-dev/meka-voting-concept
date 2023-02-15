import { OnChange } from "../../../../Types/voting-candidate";

export default function CandidateLeft(props: {
  candidatesleftProps: {
    name: string;
    onRadioClick: (event: OnChange) => void;
  };
}) {
  const { name, onRadioClick } = props.candidatesleftProps;

  return (
    <div className="vote-candidate-left">
      <input
        className="vote-radios"
        type="radio"
        value={name}
        id={name}
        name="candidates"
        onChange={(event) => onRadioClick(event)}
      />
    </div>
  );
}
