import React, { useState } from 'react';
import Feature from '../../../components/feature/Feature';


function Sensor() {
    const [sensorRecent, setSensorRecent] = useState({
        temperature: 30,
        humidity: 80,
        air_pressure: 10000,
        wind_speed: 10
    })
    return (<div className="dashboard_sensor scale-up-center">
        <Feature title="Temperature" text={`${sensorRecent.temperature} °C`} />
        <Feature title="Humidity" text={`${sensorRecent.humidity} %`} />
        <Feature title="Air Pressure" text={`${sensorRecent.air_pressure} pa`} />
        <Feature title="Wind speed" text={`${sensorRecent.wind_speed} km/h`} />
    </div>)
}

export default Sensor;