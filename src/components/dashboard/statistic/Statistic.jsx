import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import './statistic.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import { faTemperatureFull, faBottleDroplet, faWind, faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



var x = new Date;
var curr = new Date(x.setDate(x.getDate() - 7));

var firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()  + 0));
var secondDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
var thirdDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
var fourthDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
var fifthDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
var sixthDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
var seventhDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));





const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

let dataTemp = {
    morning: [],
    afternoon: [],
    evening: []
}
let dataHumi = {
    morning: [],
    afternoon: [],
    evening: []
}
let dataAirPressure = {
    morning: [],
    afternoon: [],
    evening: []
}
let dataWind = {
    morning: [],
    afternoon: [],
    evening: []
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
                data: receiveData ? receiveData.morning : null,
                fill: false,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                tension: 0.2
            },
            {
                label: "Afternoon",
                data: receiveData ? receiveData.afternoon : null,
                fill: false,
                borderColor: "#742774",
                // backgroundColor: "#000"
                // borderWidth: 6,
                borderJoinStyle: 'bevel',
                tension: 0.2
            },
            {
                label: "Evening",
                data: receiveData ? receiveData.evening : null,
                fill: false,
                borderColor: "#000",
                borderJoinStyle: 'bevel',
                tension: 0.2
            }
        ]
    }
}
function renderOptions(unit) {
    return {
        responsive: true,
        hoverRadius: 12,
        hitRadius: 30,
        radius: 3,
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        return value.toFixed(1) + unit;
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
        }
    }
}


function DataChart({ graphState }) {
    const [dataT, setDataT] = useState(makeData(null));
    const [dataH, setDataH] = useState(makeData(null));
    const [dataA, setDataA] = useState(makeData(null));
    const [dataW, setDataW] = useState(makeData(null));

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch('https://io.adafruit.com/api/v2/phamdinhtrung/feeds/iot-weather-forecast.average/data?limit=7')
            .then(result => result.json())
            .then(result => {
                for (let day_average of result) {
                    let value = day_average.value;
                    value = value.replaceAll('[', '');
                    value = value.replaceAll(']', '');
                    value = value.replaceAll(' ', '');
                    value = value.split(',');

                    dataTemp.morning.unshift(value[0]);
                    dataTemp.afternoon.unshift(value[4]);
                    dataTemp.evening.unshift(value[8]);

                    dataHumi.morning.unshift(value[1]);
                    dataHumi.afternoon.unshift(value[5]);
                    dataHumi.evening.unshift(value[9]);

                    dataAirPressure.morning.unshift(value[2]);
                    dataAirPressure.afternoon.unshift(value[6]);
                    dataAirPressure.evening.unshift(value[10]);

                    dataWind.morning.unshift(value[3]);
                    dataWind.afternoon.unshift(value[7]);
                    dataWind.evening.unshift(value[11]);
                }
                setIsLoaded(true);
                setDataT(makeData(dataTemp));
                setDataH(makeData(dataHumi));
                setDataA(makeData(dataAirPressure));
                setDataW(makeData(dataWind));

            })
    }, [])

    if (graphState === "temperature")
        return <Line data={dataT} options={renderOptions("°C")} />
    else if (graphState === "humidity")
        return <Line data={dataH} options={renderOptions("%")} />
    else if (graphState === "air_pressure")
        return <Line data={dataA} options={renderOptions(" pa")} />
    else if (graphState === "wind_speed")
        return <Line data={dataW} options={renderOptions(" k/m")} />
}

function Statistic() {
    const [graphState, setGraphState] = useState("temperature");
    return (
        <div className="dashboard_statistic scale-up-center">
            <div className="dashboard_statistic_choice">
                <div className={graphState == "temperature" ? "bold" : ""} onClick={() => { setGraphState("temperature") }}>

                    <p>
                        <FontAwesomeIcon icon={faTemperatureFull} className="icon" />
                        Temperature
                    </p>
                </div>
                <div className={graphState == "humidity" ? "bold" : ""} onClick={() => { setGraphState("humidity") }}>
                    <p>
                        <FontAwesomeIcon icon={faBottleDroplet} className="icon" />
                        Humidity
                    </p>
                </div>
                <div className={graphState == "air_pressure" ? "bold" : ""} onClick={() => { setGraphState("air_pressure") }}>
                    <p>
                        <FontAwesomeIcon icon={faCloud} className="icon" />
                        Air Pressure
                    </p>
                </div>
                <div className={graphState == "wind_speed" ? "bold" : ""} onClick={() => { setGraphState("wind_speed") }}>
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