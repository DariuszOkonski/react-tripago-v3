import "./Modal.css";

interface ModalProps {}

const Modal: React.FC<ModalProps> = () => {
  return (
    <div className="modal hide">
      <div className="modal-container">
        <small className="modal-small">title:</small>
        <p className="modal-title">Alua Soul Mallorca Resort</p>

        <small className="modal-small">description:</small>
        <p className="modal-description">
          Pellentesque a libero at lectus tincidunt facilisis quis sit amet leo.
          Phasellus ac congue lorem. Suspendisse vel est eget elit ultrices
          ornare. Nunc accumsan justo tincidunt iaculis consequat. Morbi elit
          massa, auctor sit amet elit tincidunt, viverra elementum nunc.
          Pellentesque ut ipsum eget neque accumsan varius eu a felis. Donec
          quis ante velit. Vivamus odio mi, vulputate et pulvinar vel, dapibus
          eu nulla. Nulla ac metus nec risus vehicula rutrum at quis turpis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          mauris suscipit, ullamcorper eros eu, ultrices magna. Ut lacinia odio
          at urna vehicula, eget rhoncus dolor ultrices. Nunc vitae fermentum
          lectus. In sit amet enim viverra, porttitor ligula a, auctor lacus.
          Integer eget felis eu odio pharetra luctus.
        </p>

        <small className="modal-small">board:</small>
        <p className="modal-board">Half Board</p>

        <small className="modal-small">accommodation:</small>
        <p className="modal-accommodation">Double Room With Sea View</p>

        <small className="modal-small">price:</small>
        <p className="modal-price">£2,659</p>

        <small className="modal-small">location:</small>
        <p className="modal-location">Spain</p>

        <button className="btn modal-btn">Close</button>
      </div>
    </div>
  );
};

export default Modal;
