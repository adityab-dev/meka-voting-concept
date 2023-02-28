import React from "react";

const AdminOversightContext = React.createContext({
  getElectionID: (electionID: string): void => {},
  candidateVoteInfo: [] as { name: string; totalVotes: number }[],
});

export default AdminOversightContext;
