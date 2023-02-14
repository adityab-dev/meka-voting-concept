export default function CandidateMid(props: {
  candidateMidProps: { name: string; affiliation: string; logo: string };
}) {
  const { name, affiliation, logo } = props.candidateMidProps;

  return (
    <div className="vote-candidate-mid">
      <label className="vote-candidate-font" htmlFor={name}>
        {name}
      </label>
      <div className="vote-candidate-font">{affiliation}</div>
      <img src={logo} alt="independent" height={"50px"} width={"60px"} />
    </div>
  );
}
