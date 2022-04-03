import React, { useState, useEffect } from 'react';

import Feature from '../../../components/feature/Feature';


import { useMqttState, useSubscription } from 'mqtt-reactjs-hooks';


let sensorRecent= {
    temperature: '... ',
    humidity: '... ',
    air_pressure: '... ',
    wind_speed: '... '
};

function Sensor() {
    const [isLoaded, setIsLoaded] = useState(false);


    
    useEffect(() => {
        Promise.all([
            fetch('https://io.adafruit.com/api/v2/phamdinhtrung/feeds/iot-weather-forecast.temp/data?limit=1'),
            fetch('https://io.adafruit.com/api/v2/phamdinhtrung/feeds/iot-weather-forecast.humid/data?limit=1'),
            fetch('https://io.adafruit.com/api/v2/phamdinhtrung/feeds/iot-weather-forecast.pressure/data?limit=1'),
            fetch('https://io.adafruit.com/api/v2/phamdinhtrung/feeds/iot-weather-forecast.wspeed/data?limit=1')
        ])
            .then(
                (result)=>{
                    const json_result = result.map(item=>item.json());
                    return Promise.all(json_result);
                }
            )
            .then(result=>{
                sensorRecent.temperature = result[0][0].value;
                sensorRecent.humidity = result[1][0].value;
                sensorRecent.air_pressure = result[2][0].value;
                sensorRecent.wind_speed = result[3][0].value;
                setIsLoaded(true);
            })

    }, [])




    const { message } = useSubscription(['phamdinhtrung/feeds/iot-weather-forecast.temp','phamdinhtrung/feeds/iot-weather-forecast.humid','phamdinhtrung/feeds/iot-weather-forecast.pressure','phamdinhtrung/feeds/iot-weather-forecast.wspeed']);
    if(message) {
        if(message.topic === 'phamdinhtrung/feeds/iot-weather-forecast.temp'){
            sensorRecent = {
                ...sensorRecent,
                temperature:message.message
            }
        }
        if(message.topic === 'phamdinhtrung/feeds/iot-weather-forecast.humid'){
            sensorRecent = {
                ...sensorRecent,
                humidity:message.message
            }
        }
        if(message.topic === 'phamdinhtrung/feeds/iot-weather-forecast.pressure'){
            sensorRecent = {
                ...sensorRecent,
                air_pressure:message.message
            }
        }
        if(message.topic === 'phamdinhtrung/feeds/iot-weather-forecast.wspeed'){
            sensorRecent = {
                ...sensorRecent,
                wind_speed:message.message
            }
        }
    }

    return (<div className="dashboard_sensor scale-up-center">
        <Feature title="Temperature" textHigh={sensorRecent.temperature} textLow ="°C" />
        <Feature title="Humidity" textHigh={sensorRecent.humidity} textLow = "%" />
        <Feature title="Air Pressure" textHigh={sensorRecent.air_pressure} textLow ="pa" />
        <Feature title="Wind speed" textHigh={sensorRecent.wind_speed} textLow ="km/h" />
    </div>)
}

export default Sensor;