import React, { useState } from 'react';
import Intake from './intake';

function Home(props) {
    const [cals, updateCals] = useState(0);
    return (
        <div className="content">
            <div className="feature">
                <button className="btn-logout">{'<Logout'}</button>
                <div className="right">
                    <button className="btn-logout right">X</button>
                </div>
            </div>
            <div className="center">
                <h3>Daily Calories: {cals}</h3>
                <div className="chart"></div>
                <Intake />
            </div>
        </div>
    );
}

export default Home;