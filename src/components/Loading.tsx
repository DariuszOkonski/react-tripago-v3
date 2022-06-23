import "./Loading.css";
import loading from "../gif/loading.gif";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="loading">
      <img className="loading-gif" src={loading} alt="" />
      <h2 className="loading-header">Loading . . .</h2>
    </div>
  );
};

export default Loading;
