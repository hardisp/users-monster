import React from 'react';
import './Card.style.css';

const Card = props => {
  const {data} = props;
  return (
    <div className="card-container">
      <img alt={data.name} src={`https://robohash.org/${data.id}?set=size2&size=180x180`} />
      <h2>{data.name}</h2>
      <p>{data.email}</p>
    </div>
  );
};

export default Card;
