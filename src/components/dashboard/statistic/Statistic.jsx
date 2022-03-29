import React, { useState } from 'react';
import 'chart.js/auto';
import { Chart, Bar, Doughnut, Line } from 'react-chartjs-2';
import './statistic.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import { faTemperatureFull, faBottleDroplet, faWind, faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



var curr = new Date;
var firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()));
var secondDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
var thirdDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
var fourthDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
var fifthDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
var sixthDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
var seventhDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));





const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const dataTemp = {
    morning: [22, 21, 21, 23, 18, 20, 25],
    afternoon: [33, 30, 25, 26, 26, 29, 34],
    evening: [23, 20, 17, 19, 20, 21, 25]
}
const dataHumi = {
    morning: [83, 66, 77, 95, 93, 75, 86],
    afternoon: [62, 86, 83, 71, 79, 60, 68],
    evening: [78, 95, 64, 77, 84, 87, 86]
}
const dataAirPressure = {
    morning: [966, 985, 969, 992, 978, 946, 957],
    afternoon: [973, 940, 999, 970, 920, 910, 988],
    evening: [902, 944, 915, 957, 987, 974, 934]
}
const dataWind = {
    morning: [11, 10, 6, 13, 11, 7, 5],
    afternoon: [12, 11, 11, 11, 11, 8, 10],
    evening: [6, 12, 5, 5, 9, 10, 9]
}
function makeData(receiveData) {
    return {
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
                data: receiveData.morning,
                fill: false,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                tension: 0.2
            },
            {
                label: "Afternoon",
                data: receiveData.afternoon,
                fill: false,
                borderColor: "#742774",
                // backgroundColor: "#000"
                // borderWidth: 6,
                borderJoinStyle: 'bevel',
                tension: 0.2
            },
            {
                label: "Evening",
                data: receiveData.evening,
                fill: false,
                borderColor: "#000",
                borderJoinStyle: 'bevel',
                tension: 0.2
            }
        ]
    }
}
function renderOptions(unit){
    return {
        responsive: true,
        hoverRadius: 12,
        hitRadius: 30,
        radius: 3,
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return  value + unit;
                    }
                }
            }
        },
        animations: {
            // tension: {
            //     duration: 4000,
            //     easing: 'linear',
            //     from: 1,
            //     to: 0,
            //     loop: true
            // },
            // onComplete: () => {
            //     delayed = true;
            // },
            // delay: (context) => {
            //     let delay = 0;
            //     if (context.type === 'data' && context.mode === 'default' && !delayed) {
            //         delay = context.dataIndex * 300 + context.datasetIndex * 100;
            //     }
            //     return delay;
            // }
        }
    }
}


function DataChart({ graphState }) {
    const [dataT, setDataT] = useState(makeData(dataTemp));
    const [dataH, setDataH] = useState(makeData(dataHumi));
    const [dataA, setDataA] = useState(makeData(dataAirPressure));
    const [dataW, setDataW] = useState(makeData(dataWind));

    if (graphState == "temperature")
        return <Line data={dataT} options={renderOptions("°C")} />
    else if (graphState == "humidity")
        return <Line data={dataH} options={renderOptions("%")} />
    else if (graphState == "air_pressure")
        return <Line data={dataA} options={renderOptions(" pa")} />
    else if (graphState == "wind_speed")
        return <Line data={dataW} options={renderOptions(" k/m")} />
}

function Statistic() {
    const [graphState, setGraphState] = useState("temperature");
    return (
        <div className="dashboard_statistic scale-up-center">
            <div className="dashboard_statistic_choice">
                <div className={graphState=="temperature"?"bold":""} onClick={() => { setGraphState("temperature") }}>

                    <p>
                        <FontAwesomeIcon icon={faTemperatureFull} className="icon" />
                        Temperature
                    </p>
                </div>
                <div className={graphState=="humidity"?"bold":""} onClick={() => { setGraphState("humidity") }}>
                    <p>
                        <FontAwesomeIcon icon={faBottleDroplet} className="icon" />
                        Humidity
                    </p>
                </div>
                <div className={graphState=="air_pressure"?"bold":""} onClick={() => { setGraphState("air_pressure") }}>
                    <p>
                        <FontAwesomeIcon icon={faCloud} className="icon" />
                        Air Pressure
                    </p>
                </div>
                <div className={graphState=="wind_speed"?"bold":""} onClick={() => { setGraphState("wind_speed") }}>
                    <p>
                        <FontAwesomeIcon icon={faWind} className="icon" />
                        Wind speed
                    </p>
                </div>
            </div>
            <div className="dashboard_statistic_graph">
                <DataChart graphState={graphState} className="icon" />
            </div>
        </div>)
}

export default Statistic;