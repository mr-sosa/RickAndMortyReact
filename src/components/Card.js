import React from 'react';
import './Card.scss';

export const Card = (props) => {
  const { name, url, gender, status } = props;
  return (
    <div className='card'>
      <img className='card-img' src={url} alt={name} />
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-text'>Gender: {gender}  <br/> Status: {status}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};