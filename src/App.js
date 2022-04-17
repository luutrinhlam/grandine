import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Dashboard } from './components';

import { Connector } from 'mqtt-reactjs-hooks';

import './App.css';

const pw1= 'aio_oJe';
const pw2= 'E31ZR4rs';
const pw3= '7kwvEdp';
const pw4= '9ytax';
const pw5= 'dA1cY';


const options = {
  // servers:[{ port: 1883}], //optional servers settings
  keepAlive: 60, // in seconds
  clientId: 'mqtt_grandine',
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true, // set to false to receive QoS 1 and 2 messages while offline
  reconnectPeriod: 5000, // milliseconds, interval between two reconnections. Disable auto reconnect by setting to 0.
  username: 'phamdinhtrung', //the username required by your broker, if any
  password: pw1+pw2+pw3+pw4+pw5 //the password required by your broker, if any
}

const App = () => (
  <Connector brokerUrl='wss://io.adafruit.com' options={options}>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Dashboard />
        <Brand /> 
        <WhatGPT3 />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  </Connector>
);

export default App;