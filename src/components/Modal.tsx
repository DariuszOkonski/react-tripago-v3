import "./Modal.css";
import useFetch from "./../hooks/useFetch";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { endpoint_trips } from "../constants/constants";

interface ModalProps {
  id: string;
  handleModal: (isModal: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ id, handleModal }) => {
  const [isPending, trips, err] = useFetch(`${endpoint_trips}/${id}`);
  let trip: any;

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [board, setBoard] = useState<string>("");
  const [accommodation, setAccommodation] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    trip = trips;

    if (trip !== undefined) {
      setTitle(trip.title);
      setDescription(trip.description);
      setBoard(trip.board);
      setAccommodation(trip.accommodation);
      setPrice(trip.price);
      setLocation(trip.location);
    }
  }, [trips]);

  if (err)
    return (
      <div className="modal">
        <div className="modal-container">
          <ErrorPage message={err} />
          <button onClick={() => handleModal(false)} className="btn modal-btn">
            Close
          </button>
        </div>
      </div>
    );

  if (isPending)
    return (
      <div className="modal">
        <div className="modal-container">
          <Loading />
        </div>
      </div>
    );

  return (
    <div className="modal">
      <div className="modal-container">
        <small className="modal-small">title:</small>
        <p className="modal-title">{title}</p>

        <small className="modal-small">description:</small>
        <p className="modal-description">{description}</p>

        <small className="modal-small">board:</small>
        <p className="modal-board">{board}</p>

        <small className="modal-small">accommodation:</small>
        <p className="modal-accommodation">{accommodation}</p>

        <small className="modal-small">price:</small>
        <p className="modal-price">£{price}</p>

        <small className="modal-small">location:</small>
        <p className="modal-location">{location}</p>

        <button onClick={() => handleModal(false)} className="btn modal-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
