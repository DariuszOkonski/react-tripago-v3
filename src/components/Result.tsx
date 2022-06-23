import Card from "./Card";
import "./Result.css";

interface ResultsProps {}

const Results: React.FC<ResultsProps> = () => {
  return (
    <div className="results">
      <h2 className="results-header">Results:</h2>

      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Results;
