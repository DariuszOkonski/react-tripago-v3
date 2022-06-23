import "./Card.css";
import { Trip } from "./../interfaces/index";
interface CardProps {
  title: string;
  price: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ title, price, location }) => {
  return (
    <div className="card">
      <h2 className="card-header">{title}</h2>
      <p className="card-price">
        <em>price: </em> £{price}
      </p>
      <p className="card-location">
        <em>location:</em> {location}
      </p>

      <button className="btn">details</button>
    </div>
  );
};

export default Card;
