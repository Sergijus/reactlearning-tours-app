import { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isOpen ? info : `${info.substring(0, 200)}...`}
          {` `}
          <button className="info-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'read less' : 'read more'}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
