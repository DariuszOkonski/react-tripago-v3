import "./Card.css";
import { Trip } from "./../interfaces/index";
interface CardProps {
  id: string;
  title: string;
  price: string;
  accommodation: string;
  board: string;
  location: string;
  handleModal: (isModal: boolean) => void;
  handleId: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  price,
  accommodation,
  board,
  location,
  handleModal,
  handleId,
}) => {
  const handleClick = () => {
    handleModal(true);
    handleId(id);
  };

  return (
    <div className="card">
      <h2 className="card-header">{title}</h2>
      <p className="card-price">
        <em>price: </em> £{price}
      </p>
      <p className="card-location">
        <em>location:</em> {location}
      </p>
      <p className="card-location">
        <em>accommodation:</em> {accommodation}
      </p>
      <p className="card-location">
        <em>board:</em> {board}
      </p>

      <button onClick={handleClick} className="btn">
        details
      </button>
    </div>
  );
};

export default Card;
