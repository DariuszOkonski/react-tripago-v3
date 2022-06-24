import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import Options from "./components/Options";
import Results from "./components/Result";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

function App() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("http://localhost:3000/trips");
  const [isPending, trips, err] = useFetch(url);

  const handleUrl = (url: string) => {
    setUrl(url);
  };

  return (
    <div className="App">
      <Header />
      {err && <ErrorPage message={err} />}
      {!err && (
        <>
          {isPending && <Loading />}

          <div style={{ display: isPending ? "none" : "block" }}>
            <Options handleUrl={handleUrl} />
            <Results trips={trips} />
          </div>

          {isModal && <Modal />}
        </>
      )}
    </div>
  );
}

export default App;
