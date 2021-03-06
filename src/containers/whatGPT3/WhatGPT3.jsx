import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 " id="grandine">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Botanical" textLow="An innovative self-growing garden for every home and every plant growing need.  " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">All in one <br/>Your dedicated partner</h1>
      <a href="https://www.clickandgrow.com/products/the-smart-garden-9" target="_blank">Explore the Model</a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="AI" textLow="I'm pretty sure that was because Porlyusica is the Edolas version of Grandine." />
      <Feature title="Sensor" textLow="So the dragons theoretically all have Edo counterparts which may be human. But they are still missing." />
      <Feature title="Iot" textLow="Igneel was shown in few episodes in the anime.And Wendy and the others only thought that.Porlyushka is only the Edolas form of Grandine who ended up in Earthland. Thats why they had the same voice and smell." />
    </div>
  </div>
);

export default WhatGPT3;