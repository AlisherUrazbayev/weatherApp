import React from 'react';

const MainContent = () => {
    return (
        <div className="flex flex-col items-center justify-between border-4 h-64">
            <h2>CityName</h2>
            <img className="w-16 h-16" src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png" alt="sun"/>
            <h1>CurrentTemperature</h1>
            <h3>Weather main</h3>
        </div>
    );
};

export default MainContent;