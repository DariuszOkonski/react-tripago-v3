import "./Options.css";
import { Location, Accommodation, Board } from "./../interfaces/index";
interface OptionsProps {
  locations: Location[];
  accommodations: Accommodation[];
  boards: Board[];
}

const Options: React.FC<OptionsProps> = ({
  locations,
  accommodations,
  boards,
}) => {
  return (
    <div className="options">
      <h2 className="options-header">Find your holidays by:</h2>
      <div className="options-container">
        <label className="options-label">
          <small className="options-small">locations:</small>
          <select className="options-select">
            {locations.map((item) => (
              <option value={item.location}>{item.location}</option>
            ))}
          </select>
        </label>

        <label className="options-label">
          <small className="options-small">accommodation:</small>
          <select className="options-select">
            {accommodations.map((item) => (
              <option value={item.accommodation}>{item.accommodation}</option>
            ))}
          </select>
        </label>

        <label className="options-label">
          <small className="options-small">board:</small>
          <select className="options-select">
            {boards.map((item) => (
              <option value={item.board}>{item.board}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default Options;
