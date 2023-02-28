import "./RulesPage.css";

import { useContext, useState } from "react";
import login_context from "../../Context/Login-Context/login-context";

import { Navigate, useNavigate } from "react-router-dom";
import {
  electionsPath,
  loginPath,
  personalInfoPath,
} from "../../constants/Paths";
import { OnChange } from "../../Types/voting-candidate";

import votingContext from "../../Context/Voting-Context/voting-context";

function RulesPage() {
  const [hasAccepted, setHasAccepted] = useState<boolean>(false);
  const {
    rulesAcceptedHandler,
    electionDataItem: { electionName },
  } = useContext(votingContext);
  const { docsData } = useContext(login_context);

  const navigate = useNavigate();

  function inputChangeHandler(event: OnChange) {
    const { checked } = event.target;

    setHasAccepted(checked);
  }

  function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();

    rulesAcceptedHandler(hasAccepted);

    navigate(electionsPath + `/${electionName}`);
  }

  return !docsData.Email ? (
    <Navigate to={loginPath} />
  ) : (
    <>
      <section>
        <section className="rules-container">
          <div className="rules-center">
            <p className="rules-top-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi reiciendis ipsa.
            </p>

            <div>
              <div className="rules-border">
                <section className="rules-p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Minus facere unde tenetur ducimus, fugiat,
                  voluptates blanditiis nobis odit cupiditate ad
                  neque! Maxime odio ea nesciunt tempore, nostrum illo
                  soluta voluptas blanditiis est mollitia vitae
                  dolorum delectus reiciendis architecto
                  exercitationem, iusto consequuntur qui ipsa esse?
                  Sint ex dolor veniam quidem, maxime excepturi
                  maiores ad fugiat. Obcaecati quos odio, facilis
                  cumque incidunt soluta, velit sint in minima quidem
                  alias eos reprehenderit sapiente deleniti ratione.
                  Quod nobis et accusamus delectus hic, natus facilis.
                </section>

                <section className="rules-steps">
                  <h4 className="rules-steps-heading">Steps -</h4>
                  <ul className="rules-list">
                    <li>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate nisi quam nesciunt
                      aliquam fugiat reprehenderit? Hic.
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Ratione ea voluptas veritatis.
                    </li>

                    <li>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Illum, dolorum?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Sapiente, earum corporis!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Dolor sed sequi libero
                      explicabo accusamus.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Recusandae!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Sapiente.
                    </li>
                  </ul>
                </section>
              </div>

              <section className="rules-btm">
                <form onSubmit={formSubmitHandler}>
                  <input
                    id="rules"
                    type="checkbox"
                    value="Rules Accepted"
                    onChange={inputChangeHandler}
                    required
                    disabled={docsData.Name === "ADMIN"}
                  />
                  <label htmlFor="rules">
                    I understand and will follow these steps
                  </label>
                  <div className="rules-btm-btns">
                    <button
                      type="reset"
                      onClick={() => {
                        navigate(personalInfoPath);
                      }}
                    >
                      Cancel
                    </button>
                    <button type="submit">Proceed</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default RulesPage;
