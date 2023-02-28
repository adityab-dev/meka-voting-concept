import { useState, useContext } from "react";

import votingContext from "../Voting-Context/voting-context";
import login_context from "../Login-Context/login-context";

import { OnChange } from "../../Types/voting-candidate";
import {
  ElectionDataItem,
  registerationData,
} from "../../Types/Types";
import { initialElectionDataItem } from "../../constants/init_constants";

import { database } from "../../firebase-config/firebase-config";
import { doc, updateDoc } from "firebase/firestore";

function VotingContextProvider(props: {
  children: React.ReactElement;
}) {
  const { docsData, setDocsStateHandler } =
    useContext(login_context);

  const [electionDataItem, setElectionDataItem] =
    useState<ElectionDataItem>(initialElectionDataItem);

  function rulesAcceptedHandler(hasAcceptedRules: boolean) {
    setElectionDataItem((prevState) => {
      return {
        ...prevState,
        hasAccptedRules: hasAcceptedRules,
      };
    });
  }

  function radioClickHandler(event: OnChange) {
    const candidateName = event.target.value;

    setElectionDataItem((prevState) => {
      return { ...prevState, votedFor: candidateName };
    });
  }

  function getElectionName(param: string) {
    setElectionDataItem((prevState) => {
      return { ...prevState, electionName: param };
    });
  }

  function updateVotingData() {
    const dataToUpdate = doc(
      database,
      "users",
      docsData.Name
    );

    let electionData = docsData.electinData;

    setElectionDataItem((prevState) => {
      return { ...prevState, hasVoted: true };
    });

    let newDocsState: registerationData = {
      ...docsData,
      electinData: [
        ...electionData,
        { ...electionDataItem, hasVoted: true },
      ],
    };

    updateDoc(dataToUpdate, newDocsState)
      .then(() => setDocsStateHandler(newDocsState))
      .catch((error) => alert(error));

    setDocsStateHandler(newDocsState);
  }

  function resetElectionData() {
    setElectionDataItem(initialElectionDataItem);
  }

  const votingValueProp = {
    radioClickHandler,
    updateVotingData,
    rulesAcceptedHandler,
    getElectionName,
    electionDataItem,
    resetElectionData,
  };

  return (
    <votingContext.Provider value={votingValueProp}>
      {props.children}
    </votingContext.Provider>
  );
}
export default VotingContextProvider;
