import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, CircularProgress, Box } from "@mui/material";




export default function Country() {
    const countryName = useParams(); 
    const countryUrl = `https://restcountries.com/v3.1/name/${countryName.id}?fullText=true`;
    const [country, setCountry] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        async function getCountry() {
            try {
                const response =  await axios.get(countryUrl);
                const data = await response.data[0];
                setCountry(data);
                setIsLoading(false)
            }
            catch (error) {
                console.log("Error")
            }
        };
        getCountry();
    }, [countryUrl]);
    
    function checkBorders() {
        return "borders" in country ? country.borders.map((item, index) => <li key={index}>{item}</li>) : <li>No borders</li>
    }

    


    if (isLoading) {
        return  (
            <Box sx={{ display: "flex", justifyContent:"center"}}>
                <CircularProgress />
            </Box>
        )
    } return (
        <div className="country_item">            
            <h1 className="country_name">{country.name.common}</h1>
            <h2 className="country_region">{country.region}</h2>
            <h3 className="country_subregion">{country.subregion}</h3>
            <img className="country_image" src={country.flags.png} alt={country.flags.alt} />
            <p> <span>Population: </span> {country.population}</p>
            <p> <span>Area: </span>{country.area}</p>
            <div className="border_list">
                <p>Borders: </p>
                <ul className="border_items">
                    {checkBorders()}
                </ul>
            </div>
            <Button 
                sx={{ 
                    backgroundColor: "#f4b406f0", 
                    color: "black" }} 
                    variant="contained" 
                    href="#contained-buttons">
                        <a className="map_link" href={country.maps.googleMaps} target="_blank" rel="noreferrer">
                            Check on the map
                        </a>
            </Button>
        </div>
        );
    }
    
    /*

*/