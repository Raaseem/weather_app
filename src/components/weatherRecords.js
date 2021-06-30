import React, { Component, useEffect, useState } from 'react';
import Data from './data/cities.json'
import axios from 'axios';
const WeatherRecords = () => {
    const APIKEY = "8c7c68a170d29c6d6d528611b2d2ac16";
    //  const url = `https://api.openweathermap.org/data/2.5/weather?id=london&units=metric&appid=${APIKEY}`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${APIKEY}`;

    const [weath, setWeath] = useState([]);

    useEffect(() => {
        axios.get(url).then(res => {
            console.log(res);
            setWeath(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-3">
                    <div className="content">
                        <form action="" method="">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Enter city " />
                            </div>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary mt-10"
                                    style={{ color: "white", backgroundColor: "purple" }} type="submit">Add city</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-md-1">

                </div>
                <div className="col-md-10 card" style={{ width: "18rem;" }}>
                    <table>
                        <tbody>
                            {Data.List.map((list, index) => {
                                return (
                                    <ul className="col-md-8"
                                        style={{ listStyleType: "none", border: "1px solid black", verticalAlign: "middle", flex: "0 0 50%", maxWidth: "50%" }} key={index}>
                                        <li className="">{list.CityName}</li>
                                        <li>{list.Temp}</li>
                                        <li>{list.Status}</li>

                                    </ul>
                                )

                            })}
                        </tbody>
                    </table>

                </div>



            </div>

            <footer className="footer">
                <div className="container">
                    <span className="text-muted">2021 Fidenz Technologies.</span>
                </div>
            </footer>

        </div>




    );
}

export default WeatherRecords;