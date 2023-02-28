import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase-config/firebase-config";

import React, { useEffect, useState, useCallback } from "react";

import AdminOversightContext from "./AdminOversight-Context";

import { registerationData } from "../../Types/Types";
import { votingList } from "../../constants/voting-list";

function AdminOversightContextProvider(props: {
  children: React.ReactElement;
}) {
  const [electionID, setElectionID] = useState<string>("");

  // const [votersList, setVotersList] = useState<registerationData[]>([]);

  const [candidateVoteInfo, setCandidateVoteInfo] = useState<
    { name: string; totalVotes: number }[]
  >([]);

  let votersListBuffer: registerationData[] = [];

  useEffect(() => {
    const documentReference = collection(database, "users");

    getDocs(documentReference)
      .then((data) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        votersListBuffer = data.docs.map((item) =>
          item.data()
        ) as registerationData[];
      })
      .then(() => {
        const VoteInfoInstance = votingList.map((candidate) => {
          return { name: candidate.name, totalVotes: 0 };
        });

        for (let voter of votersListBuffer) {
          for (let data of voter.electinData) {
            const isEligible =
              data.electionName === electionID && data.hasVoted;

            if (isEligible) {
              let votedFor = data.votedFor;

              const index = VoteInfoInstance.findIndex(
                (info) => info.name === votedFor
              );

              VoteInfoInstance[index].totalVotes += 1;
            }
          }
        }

        setCandidateVoteInfo(VoteInfoInstance);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [electionID]);

  const getElectionID = useCallback((electionID: string) => {
    setElectionID(electionID);
  }, []);

  const oversightValueProps = {
    getElectionID,
    candidateVoteInfo,
  };

  return (
    <AdminOversightContext.Provider value={oversightValueProps}>
      {props.children}
    </AdminOversightContext.Provider>
  );
}

export default AdminOversightContextProvider;
