import { persnalInfoNamesArray } from "../../../../constants/reg-input";

import { collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { useEffect, useState } from "react";
import { app, database } from "../../../../firebase-config/firebase-config";

export default function PersonalInfoRightList() {
  const auth = getAuth(app);

  const [state, setState] = useState<any>();
  const dbInstance = collection(database, "users");

  useEffect(() => {
    async function getData() {
      const data = await getDocs(dbInstance);

      setState(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );

      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {persnalInfoNamesArray.map((name) => {
        return (
          <li key={name}>
            <label className="user-right-labels" htmlFor={name}>
              {name}
            </label>
            <div id={name}></div>
          </li>
        );
      })}

      <button onClick={() => console.log("state", state)}>state</button>
    </>
  );
}
