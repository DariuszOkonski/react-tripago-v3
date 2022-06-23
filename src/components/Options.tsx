import "./Options.css";

interface OptionsProps {}

const Options: React.FC<OptionsProps> = () => {
  return (
    <div className="options">
      <h2 className="options-header">Find your holidays by:</h2>
      <div className="options-container">
        <label className="options-label">
          <small className="options-small">location:</small>
          <select className="options-select">
            <option value="">hello world</option>
            <option value="">welcome</option>
            <option value="">
              jlksajdf lksaf dlsakdfj asf sadklfj sadf lsdfj{" "}
            </option>
          </select>
        </label>

        <label className="options-label">
          <small className="options-small">rooms:</small>
          <select className="options-select">
            <option value="">hello world</option>
            <option value="">welcome</option>
            <option value="">kasjd dlsakdfj asf</option>
          </select>
        </label>

        <label className="options-label">
          <small className="options-small">food:</small>
          <select className="options-select">
            <option value="">hello world</option>
            <option value="">welcome</option>
            <option value="">kasjd flskdfj lksadf</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Options;
