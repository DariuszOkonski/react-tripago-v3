import "./Options.css";

interface OptionsProps {}

const Options: React.FC<OptionsProps> = () => {
  return (
    <div className="options">
      <h2 className="options-header">Find your holidays by:</h2>
      <div className="options-container">
        <label className="options-label">
          <small className="options-small">locations:</small>
          <select className="options-select">
            <option value="">All</option>
            <option value="">Greece</option>
            <option value="">Spain</option>
          </select>
        </label>

        <label className="options-label">
          <small className="options-small">accommodation:</small>
          <select className="options-select">
            <option value="">All</option>
            <option value="">Bed and Breakfast</option>
            <option value="">Double Room</option>
          </select>
        </label>

        <label className="options-label">
          <small className="options-small">board:</small>
          <select className="options-select">
            <option value="">All</option>
            <option value="">All inclusive</option>
            <option value="">Half board</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Options;
