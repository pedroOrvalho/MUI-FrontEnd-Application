import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const countriesUrl = "https://restcountries.com/v3.1/all"

export default function CountriesList() {
    const [countriesList, setCountriesList] = useState([]);

    useEffect(() => {
        async function getCountries() {
            try {
                const response = await axios.get(countriesUrl)
                const data= await response.data
                setCountriesList(data)
            } catch (error) {
                console.log("Error")
            }
        };
        getCountries();
    },[]);

    return (
        <div className="countriesList_container">
            { countriesList.map((country, index) => 
            <div key={index} className="countries_container">
                <h1>{country.name.common}</h1>
                <img src={country.flags.png} alt={country.flags.alt} />
                <h2>{country.region}</h2>
                <Link to={`/countries/${country.name.common}`}><button>More details</button></Link>
            </div>
            )}
        </div>
    );
}