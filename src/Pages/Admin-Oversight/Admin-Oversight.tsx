import "./Admin-oversight.css";

import BabuBhaiya from "../../Assets/BabuBhaiya.jpg";
import BJP from "../../Assets/bjp.png";
import Congress from "../../Assets/congress.png";
import AAP from "../../Assets/AAP.png";

import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import AdminOversightContext from "../../Context/AdminOversight-Context/AdminOversight-Context";

import { votingList } from "../../constants/voting-list";
const candidatesImgArray = [BabuBhaiya, BJP, Congress, AAP];

function AdminOversight() {
  const { getElectionID, candidateVoteInfo } = useContext(
    AdminOversightContext
  );

  let params = useParams();
  let electionID = params.electionID as string;

  useEffect(() => {
    getElectionID(electionID);
  }, [getElectionID, electionID]);

  return (
    <section className="oversight-container">
      {votingList.map((candidate, index) => {
        const { name } = candidate;
        const key = candidate.name + Math.random();

        return (
          <div
            key={key}
            className="oversight-candidate-padding"
          >
            <div className="oversight-candidate">
              <img
                src={candidatesImgArray[index]}
                alt={name}
                className="oversight-candidate-img"
              />
              <div>{name}</div>
              {candidateVoteInfo.length ? (
                <div>{candidateVoteInfo[index].totalVotes}</div>
              ) : null}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AdminOversight;
