import "./Card.css";
import { Trip } from "./../interfaces/index";
interface CardProps {
  title: string;
  price: string;
  accommodation: string;
  board: string;
  location: string;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  accommodation,
  board,
  location,
}) => {
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

      <button className="btn">details</button>
    </div>
  );
};

export default Card;
