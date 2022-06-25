import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import Options from "./components/Options";
import Results from "./components/Result";
import useFetch from "./hooks/useFetch";
import { useState } from "react";
import { endpoint_trips } from "./constants/constants";

function App() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [url, setUrl] = useState<string>(endpoint_trips);
  const [isPending, trips, err] = useFetch(url);
  const [id, setId] = useState<string>("");

  const handleUrl = (url: string) => {
    setUrl(url);
  };

  const handleId = (id: string) => {
    setId(id);
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
            <Results
              trips={trips}
              handleModal={setIsModal}
              handleId={handleId}
            />
          </div>

          {isModal && <Modal handleModal={setIsModal} id={id} />}
        </>
      )}
    </div>
  );
}

export default App;
