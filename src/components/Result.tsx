import Card from "./Card";
import "./Result.css";
import { Trip } from "./../interfaces/index";
interface ResultsProps {
  trips: Trip[];
}

const Results: React.FC<ResultsProps> = ({ trips }) => {
  return (
    <div className="results">
      {trips.length ? (
        <h2 className="results-header">Results:</h2>
      ) : (
        <h2 className="results-header">No Results Founded</h2>
      )}

      {trips.map((trip) => (
        <Card
          key={trip.id}
          title={trip.title}
          price={trip.price}
          accommodation={trip.accommodation}
          board={trip.board}
          location={trip.location}
        />
      ))}
    </div>
  );
};

export default Results;
