import "./Card.css";

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <div className="card">
      <h2 className="card-header">2 Night Stay in Venice</h2>
      <p className="card-description">
        description: Lorem ipsum dolor sit amet...
      </p>
      <p className="card-price">price: £1,020</p>
      <p className="card-location">location: spain</p>

      <button className="btn">details</button>
    </div>
  );
};

export default Card;
