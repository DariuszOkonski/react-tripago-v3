import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import Options from "./components/Options";
import Results from "./components/Result";
import useFetch from "./hooks/useFetch";

function App() {
  const [isPending, data, err] = useFetch("http://localhost:3000/tripss");

  return (
    <div className="App">
      <Header />
      {err && <ErrorPage message={err} />}
      {!err && (
        <>
          {isPending && <Loading />}

          {!isPending && (
            <>
              <Options />
              <Results />
              <Modal />
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
