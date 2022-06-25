import "./Options.css";
import { useState, useEffect } from "react";
import {
  ALL,
  endpoint_trips,
  endpoint_locations,
  endpoint_accommodations,
  endpoint_boards,
} from "./../constants/constants";
import useFetch from "./../hooks/useFetch";
interface OptionsProps {
  handleUrl: (url: string) => void;
}

const Options: React.FC<OptionsProps> = ({ handleUrl }) => {
  const [, locations] = useFetch(endpoint_locations);
  const [, accommodations] = useFetch(endpoint_accommodations);
  const [, boards] = useFetch(endpoint_boards);

  const [location, setLocation] = useState<string>(ALL);
  const [accommodation, setAccommodation] = useState<string>(ALL);
  const [board, setBoard] = useState<string>(ALL);

  useEffect(() => {
    const tempLocation = location !== ALL ? `location=${location}` : "";
    const tempAccommodation =
      accommodation !== ALL ? `accommodation=${accommodation}` : "";

    const tempBoard = board !== ALL ? `board=${board}` : "";

    const firstAmpersand =
      (tempLocation && tempAccommodation) || (tempLocation && tempBoard)
        ? "&"
        : "";
    const secondAmpersand = tempAccommodation && tempBoard ? "&" : "";

    handleUrl(
      `${endpoint_trips}?${tempLocation}${firstAmpersand}${tempAccommodation}${secondAmpersand}${tempBoard}`
    );
  }, [location, accommodation, board]);

  return (
    <div className="options">
      <h2 className="options-header">Find your holidays by:</h2>
      <div className="options-container">
        <label className="options-label">
          <small className="options-small">locations:</small>
          <select
            className="options-select"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            {locations.map((item) => (
              <option key={item.id} value={item.location}>
                {item.location}
              </option>
            ))}
          </select>
        </label>

        <label className="options-label">
          <small className="options-small">accommodation:</small>
          <select
            className="options-select"
            onChange={(e) => setAccommodation(e.target.value)}
            value={accommodation}
          >
            {accommodations.map((item) => (
              <option key={item.id} value={item.accommodation}>
                {item.accommodation}
              </option>
            ))}
          </select>
        </label>

        <label className="options-label">
          <small className="options-small">board:</small>
          <select
            className="options-select"
            onChange={(e) => setBoard(e.target.value)}
            value={board}
          >
            {boards.map((item) => (
              <option key={item.id} value={item.board}>
                {item.board}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default Options;
