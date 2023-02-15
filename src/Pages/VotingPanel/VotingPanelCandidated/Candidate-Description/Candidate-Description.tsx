export default function CandidateDescription(props: {
  candidateDescriptionProps: {
    value: string;
    name: string;
    age: number;
    affiliation: string;
    education: string;
  };
}) {
  const { value, name, age, affiliation, education } = props.candidateDescriptionProps;

  return (
    <>
      {value === name ? (
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
