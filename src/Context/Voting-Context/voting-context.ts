import React from "react";
import { initialElectionDataItem } from "../../constants/init_constants";

import { OnChange } from "../../Types/voting-candidate";

const votingContext = React.createContext({
  radioClickHandler: (event: OnChange): void => {},
  updateVotingData: (): void => {},
  rulesAcceptedHandler: (
    hasAcceptedRules: boolean
  ): void => {},
  getElectionName: (param: string): void => {},
  electionDataItem: initialElectionDataItem,
  resetElectionData: (): void => {},
});

export default votingContext;
