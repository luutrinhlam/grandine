import React, { useState } from 'react';
import './dashboard.css';

import Statistic from './statistic/Statistic'
import Sensor from './sensor/Sensor'



function Dashboard() {
    const [displaySensor, setDisplaySensor] = useState(true);

    return (
        <div className="dashboard">
            <div className="dashboard_type">
                <p className={displaySensor==true?"choose":""}  onClick={() => setDisplaySensor(true)}>Today</p>
                <p className={displaySensor==false?"choose":""} onClick={() => setDisplaySensor(false)}>Statistic</p>
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