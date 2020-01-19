import React from 'react';
import Card from '../Card/Card.component';
import './CardList.style.css';

const CardList = props => {
  return (
    <div className="card-list">
      {props.data &&
        props.data.map(u => {
          return <Card data={u} key={u.id} />;
        })}
    </div>
  );
};

export default CardList;
