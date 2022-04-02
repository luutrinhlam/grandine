import React from 'react';
import './feature.css';

const Feature = ({ title, textHigh, textLow }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p className="text_high">{textHigh}</p>
      <p className="text_low">{textLow}</p>
    </div>
  </div>
);

export default Feature;