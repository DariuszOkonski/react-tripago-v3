import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import Options from "./components/Options";
import Results from "./components/Result";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";

function App() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [, locations] = useFetch("http://localhost:3000/locations");
  const [, accommodations] = useFetch("http://localhost:3000/accommodations");
  const [, boards] = useFetch("http://localhost:3000/boards");
  const [isPending, trips, err] = useFetch("http://localhost:3000/trips");

  return (
    <div className="App">
      <Header />
      {err && <ErrorPage message={err} />}
      {!err && (
        <>
          {isPending && <Loading />}

          {!isPending && (
            <>
              <Options
                locations={locations}
                accommodations={accommodations}
                boards={boards}
              />
              <Results trips={trips} />

              {isModal && <Modal />}
            </>
          )}
        </>
      )}{" "}
    </div>
  );
}

export default App;

{
  /* <h4>by location, by rooms, by food, price low-hight</h4>
http://localhost:3000/trips
http://localhost:3000/trips?loc=Greece
http://localhost:3000/trips?rooms=Double%20Room
http://localhost:3000/trips?food=All%20Inclusive
*/
}
