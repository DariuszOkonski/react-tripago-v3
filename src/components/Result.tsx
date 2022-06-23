import Card from "./Card";
import "./Result.css";
import { Trip } from "./../interfaces/index";
interface ResultsProps {
  trips: Trip[];
}

const Results: React.FC<ResultsProps> = ({ trips }) => {
  return (
    <div className="results">
      <h2 className="results-header">Results:</h2>

      {trips.map((trip) => (
        <Card
          key={trip.id}
          title={trip.title}
          price={trip.price}
          location={trip.location}
        />
      ))}
    </div>
  );
};

export default Results;
