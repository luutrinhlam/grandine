import React, { useState } from 'react';
import './dashboard.css';
import Feature from '../../components/feature/Feature';

import 'chart.js/auto';
import { Chart, Bar, Doughnut, Line } from 'react-chartjs-2';

var curr = new Date;
var firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()));
var secondDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
var thirdDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
var fourthDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
var fifthDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
var sixthDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
var seventhDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));




const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

var data1 = {
    labels: [
        `${firstDay.getDate()} ${month[firstDay.getMonth()]}`,
        `${secondDay.getDate()} ${month[secondDay.getMonth()]}`,
        `${thirdDay.getDate()} ${month[thirdDay.getMonth()]}`,
        `${fourthDay.getDate()} ${month[fourthDay.getMonth()]}`,
        `${fifthDay.getDate()} ${month[fifthDay.getMonth()]}`,
        `${sixthDay.getDate()} ${month[sixthDay.getMonth()]}`,
        `${seventhDay.getDate()} ${month[seventhDay.getMonth()]}`
    ],
    datasets: [
        {
            label: "Morning",
            data: [22, 21, 21, 23, 18, 20, 25],
            fill: false,
            // backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Afternoon",
            data: [33, 30, 25, 26, 26, 29, 34],
            fill: false,
            borderColor: "#742774"
        },
        {
            label: "Evening",
            data: [23, 20, 17, 19, 20, 21, 25],
            fill: false,
            borderColor: "#000"
        }
    ]
};


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

function DataChart({graphState}){
    const [data, setData] = useState(data1);

    if(graphState == "temperature") return <Line data={data}/>
    else return (<div>hihi</div>)
}

function Statistic() {
    const [graphState, setGraphState] = useState("temperature");
    return (
        <div className="dashboard_statistic scale-up-center">
            <div className="dashboard_statistic_choice">
                <div className="dashboard_statistic_choice_temp" onClick={()=>{setGraphState("temperature")}}><p>Temperature</p></div>
                <div className="dashboard_statistic_choice_humi" onClick={()=>{setGraphState("humidity")}}><p>Humidity</p></div>
                <div className="dashboard_statistic_choice_air" onClick={()=>{setGraphState("air_pressure")}}><p>Air Pressure</p></div>
                <div className="dashboard_statistic_choice_wind" onClick={()=>{setGraphState("wind_speed")}}><p>Wind speed</p></div>
            </div>
            <div className="dashboard_statistic_graph">
                <DataChart graphState={graphState}/>
            </div>
        </div>)
}



function Dashboard() {
    const [displaySensor, setDisplaySensor] = useState(true);

    return (
        <div className="dashboard">
            <div className="dashboard_type">
                <p onClick={() => setDisplaySensor(true)}>Today</p>
                <p onClick={() => setDisplaySensor(false)}>Statistic</p>
            </div>
            <div className="dashboard_container">
                {displaySensor
                    ? <Sensor />
                    : <Statistic />
                }
            </div>
        </div>
    );
}

export default Dashboard;