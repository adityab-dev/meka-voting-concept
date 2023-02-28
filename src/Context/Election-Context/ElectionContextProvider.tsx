import electionContext from "../Election-Context/election-context";

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { database } from "../../firebase-config/firebase-config";

import { initialElectionEvent } from "../../constants/init_constants";
import { Election, FormEvent } from "../../Types/Types";
import { OnChange } from "../../Types/voting-candidate";

import votingContext from "../Voting-Context/voting-context";
import login_context from "../Login-Context/login-context";
import { electionsPath, rulesPath } from "../../constants/Paths";

function ElectionContextProvider(props: { children: React.ReactElement }) {
  const { docsData } = useContext(login_context);

  const { electionDataItem, getElectionName } = useContext(votingContext);

  const [showForm, setShowForm] = useState<boolean>(false);

  const [electionEvent, setElectionEvent] = useState<Election>(initialElectionEvent);

  const [electionList, setElectionList] = useState<Array<Election>>([]);

  const navigate = useNavigate();

  const dbInstance = collection(database, "electionList");

  useEffect(() => {
    getDocs(dbInstance).then((res) => {
      let electionList: Election[] = [];

      electionList = res.docs.map((election) => election.data()) as Array<Election>;

      setElectionList(electionList);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function inputChangeHandler(event: OnChange) {
    const { name, value } = event.target;

    const inputField = name;
    const inputValue = value;

    const newInputField = { [inputField]: inputValue };

    setElectionEvent((prevState) => {
      return { ...prevState, ...newInputField };
    });
  }

  function formSubmitHandler(event: FormEvent) {
    event.preventDefault();

    setElectionList((prevState) => {
      return [...prevState, electionEvent];
    });

    setDoc(doc(dbInstance, electionEvent.election), electionEvent)
      .then(() => getDocs(dbInstance))
      .then((res) => {
        let electionList: Election[] = [];
        electionList = res.docs.map((election) => election.data()) as Array<Election>;
        setElectionList(electionList);
      });

    setElectionEvent(initialElectionEvent);
  }

  function showFormHandler(flag: boolean) {
    setShowForm(flag);
  }

  let clickHandler: (el: Election) => void;

  if (docsData.Name === "ADMIN") {
    clickHandler = (el) => {
      navigate(`/admin/elections/${el.election}`);
    };
  } else {
    clickHandler = (el) => {
      if (el.election !== electionDataItem.electionName) {
        getElectionName(el.election);
      }

      const currentElectionDataItem = docsData.electinData.filter(
        (elec) => elec.electionName === el.election
      );

      const hasVoted = currentElectionDataItem.length;

      if (hasVoted) {
        const hasAcceptedRules = currentElectionDataItem[0].hasAccptedRules;

        if (hasAcceptedRules) {
          // if (electionDataItem.hasAccptedRules)
          navigate(electionsPath + `/${currentElectionDataItem[0].electionName}`);
        }
      } else {
        navigate(rulesPath);
      }
    };
  }

  const valueProps = {
    docsData,
    formSubmitHandler,
    inputChangeHandler,
    showForm,
    electionEvent,
    electionList,
    clickHandler,
    showFormHandler,
  };
  return <electionContext.Provider value={valueProps}>{props.children}</electionContext.Provider>;
}

export default ElectionContextProvider;
