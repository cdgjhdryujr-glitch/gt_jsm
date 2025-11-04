import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__feature">
      {title && <h4>{title}</h4>}
      {text && <p>{text}</p>}
    </div>
  );
}

export default Feature
