import '../../styles/RecommendationModal.css';
import RecommendationModal from './RecommendationModal.js';

const Modal = ({ handleClose, show, data }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const recommendation = show ? <RecommendationModal props={data} handleClose={handleClose} /> : <div />;

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className='modal-main'>
        {recommendation}
      </section>
    </div>
  );
};

export default Modal;