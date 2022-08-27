import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import axios, {AxiosError} from "axios";

function App() {

    async function getWeatherData() {
        try {
            const id = "29ff1474813fa95ec8bd8573c96f8f30";
            const lat = "43.673066";
            const lon = "-79.440844";
            const units = 'metrics'
            const response = await axios.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${id}&units=${units}`);
            setWeather(response.data);
        } catch (e: unknown) {
            const error = e as AxiosError;
            console.log(error.message);
        }
    }

    const [weather, setWeather] = useState<any>(null);

    useEffect(() => {
        getWeatherData();
    }, []);

    console.log(weather);

    return (
        <div>
            <Header />
            <MainContent />
        </div>
    );
}

export default App;
