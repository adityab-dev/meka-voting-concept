import "./VotingPanelPage.css";

import { useState } from "react";
import { OnChange } from "../../Types/voting-candidate";
import VotingPanelCandidates from "./VotingPanelCandidated/VotingPanelCandidated";

import { useContext } from "react";
import login_context from "../../Context/Login-Context/login-context";

import { useNavigate, Navigate } from "react-router-dom";
import {
  headerPath,
  loginPath,
  Paths,
  personalInfoPath,
  rulesPath,
  votingPath,
} from "../../constants/Paths";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase-config/firebase-config";
import { registerationData } from "../../Types/Types";

const initialState = { value: "" };

export default function VotingPanelPage() {
  const [state, setState] = useState<{ value: string }>(initialState);
  const { docsData, setDocsStateHandler } = useContext(login_context);
  const navigate = useNavigate();

  function clickHandler(event: OnChange) {
    const { value: CANDIDATE_NAME } = event.target;

    console.log(CANDIDATE_NAME);

    setState((prevState) => {
      return { ...prevState, value: CANDIDATE_NAME };
    });
  }

  const votingCandidateProps = {
    onRadioClick: clickHandler,
    value: state.value,
  };

  let path: Paths = headerPath;

  if (!docsData.Email) path = loginPath;
  if (docsData.Email && !docsData.hasAcceptedRules) path = rulesPath;
  if (docsData.Email && docsData.hasAcceptedRules) path = votingPath;

  return path !== votingPath ? (
    <Navigate to={path} />
  ) : (
    <section className="voting-container">
      <div className="vote-center">
        <h1 className="vote-heading">Voting Panel</h1>
        <VotingPanelCandidates votingCandidatesProp={votingCandidateProps} />
        <button
          onClick={() => {
            const dataToUpdate = doc(database, "users", docsData.Name);

            let newDocsState: registerationData = {
              ...docsData,
              hasVoted: true,
              votedFor: state.value,
            };
            updateDoc(dataToUpdate, newDocsState)
              .then(() => setDocsStateHandler(newDocsState))
              .then(() => navigate(personalInfoPath))
              .catch((error) => alert(error));

            setDocsStateHandler(newDocsState);
          }}
          style={{
            fontSize: "1.25rem",
            padding: "0.5rem 1rem",
            background: "lightblue",
            color: "black",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Vote
        </button>
      </div>
    </section>
  );
}
