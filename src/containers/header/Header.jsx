import React from 'react';
// import people from '../../assets/people.png';
import ai from '../../assets/plant.png';
import './header.css';
import { useState } from 'react'
import { useMqttState, useSubscription } from 'mqtt-reactjs-hooks';




function Header() {
  const { mqttClient } = useMqttState();

  const [ email, setEmail ] = useState('');



  function SubmitEmail(email) {
    alert('Thank for your subcription! Grandine will be there with your weather');
    return mqttClient.publish('phamdinhtrung/feeds/iot-weather-forecast.mail', email);  
  }

  function handleInputChange(event){
    const value = event.target.value;
    setEmail(value);
  }
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1>Your garden is safe with Botanical</h1>
        <p>Get the most recently status of your lovely plants in the most convenient way<br></br> Everything just for you</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" onChange={handleInputChange}/>
          <button type="button" onClick={() => SubmitEmail(email)}>Get Notification</button>
        </div>

        {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  )
};


export default Header;