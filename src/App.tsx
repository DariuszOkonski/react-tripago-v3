import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Options from "./components/Options";
import Results from "./components/Result";

function App() {
  return (
    <div className="App">
      <Header />
      <Options />
      <Results />

      <Modal />
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
