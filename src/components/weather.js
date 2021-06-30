import React, { Component, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
        city: ""
    });


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name == "city") {
            setForm({ ...form, city: value });
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const APIKEY = "8c7c68a170d29c6d6d528611b2d2ac16";

        const url = `https://api.openweathermap.org/data/2.5/weather?id=${form.city}&units=metric&appid=${APIKEY}`
        const data = await fetch()
            .then((res) => res.json())
            .then((data) => data);

        setWeather({ data: data });
    }
    return (
        <div style={{ minHeight: "100vh" }}>
            <h1 className="bg-success p-2 mt-2"> Weather App</h1>
            <form>
                <div className="input-group mb-3 mt-5">
                    <input type="text"
                        className="form-control px-10"
                        placeholder="Enter City Name"
                        name="city"
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <button className="btn btn-secondary px-3 " onClick={(e) => handleSubmit(e)}>Add</button>
                </div>
            </form>


        </div>
    );
}

export default Weather;