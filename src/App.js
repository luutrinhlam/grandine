import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import { Connector } from 'mqtt-reactjs-hooks';

import './App.css';

const options = {
  // servers:[{host: 'localhost', port: 1883}], //optional servers settings
  keepAlive: 60, // in seconds
  clientId: 'mqttjs_react',
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true, // set to false to receive QoS 1 and 2 messages while offline
  reconnectPeriod: 1000, // milliseconds, interval between two reconnections. Disable auto reconnect by setting to 0.
  username: 'luutrinhlam', //the username required by your broker, if any
  password: 'aio_IZlb68f98u51WmafiI40YDBKvI5F' //the password required by your broker, if any
}

const App = () => (
  <Connector brokerUrl='https://io.adafruit.com' options={options}>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Brand />

      </div>
      <div className="color__bg">
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  </Connector>
);

export default App;

// import React from 'react';

// import { Connector } from 'mqtt-reactjs-hooks';
// import { useMqttState, useSubscription } from 'mqtt-reactjs-hooks';
// function Status() {
//   const { mqttClient } = useMqttState();
//   const { message,topic } = useSubscription(['luutrinhlam/feeds/bbc-temp']);

//   function handleClick(message) {
//     return mqttClient.publish('luutrinhlam/feeds/bbc-temp', message);
//   }

//   return (
//     <>
//       <button type='button' onClick={() => handleClick('5')}>
//         Start
//       </button>
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//         <span>{`topic:${topic} - message: ${message.message}`}</span>
//       </div>
//     </>
//   );
// }

// let options = {
//   // servers:[{host: 'localhost', port: 1883}], //optional servers settings
//   keepAlive: 60, // in seconds
//   clientId: 'mqttjs_react',
//   protocolId: 'MQTT',
//   protocolVersion: 4,
//   clean: true, // set to false to receive QoS 1 and 2 messages while offline
//   reconnectPeriod: 1000, // milliseconds, interval between two reconnections. Disable auto reconnect by setting to 0.
//   username: 'luutrinhlam', //the username required by your broker, if any
//   password: 'aio_IZlb68f98u51WmafiI40YDBKvI5F' //the password required by your broker, if any
// }
// export default function App() {
//   return (
//     <Connector brokerUrl='https://io.adafruit.com' options={options}>
//       hi
//       <Status />
//     </Connector>
//   );
// }