import { useContext } from "react";
import electionContext from "../../Context/Election-Context/election-context";

import { date, election } from "../../constants/voting-form ";

import "./ElectionPage.css";

function ElectionPage() {
  const {
    showForm,
    formSubmitHandler,
    inputChangeHandler,
    docsData,
    electionList,
    electionEvent,
    showFormHandler,
    clickHandler,
  } = useContext(electionContext);

  return (
    <section className="elect-container">
      <div className="elect-center">
        <div className="elect-headings">Other Elections:</div>
        {electionList.map((el) => {
          const electionKey = el.election + Math.random();

          return (
            <div
              className="elect-horizontal"
              key={electionKey}
              onClick={() => clickHandler(el)}
            >
              <div>{el.election}</div>
              <div>{el.date}</div>
            </div>
          );
        })}

        {docsData.Name === "ADMIN" && !showForm ? (
          <button
            className={`admin-election-controller ${
              docsData.Name === "ADMIN"
                ? "display-add-election-btn"
                : ""
            }`}
            onClick={() => showFormHandler(true)}
          >
            Add Election
          </button>
        ) : null}

        {showForm ? (
          <form
            className="elect-admin-form"
            onSubmit={formSubmitHandler}
          >
            <input
              type="text"
              required
              className="elect-inputs"
              placeholder="Name Of Election"
              name={election}
              onChange={inputChangeHandler}
              value={electionEvent.election}
            />

            <input
              id="elect-date"
              required
              className="elect-inputs"
              placeholder="Date"
              type="date"
              name={date}
              onChange={inputChangeHandler}
              value={electionEvent.date}
            />

            <button
              type="submit"
              className="elect-submit"
            >
              Add
            </button>
          </form>
        ) : null}

        {showForm ? (
          <button
            style={{
              fontSize: "1.1rem",
              width: "max-content",
              marginTop: "1rem",
            }}
            onClick={() => showFormHandler(false)}
          >
            Close
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default ElectionPage;
