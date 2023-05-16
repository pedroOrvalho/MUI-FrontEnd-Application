import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination, Stack, Box, TextField } from '@mui/material';

const countriesUrl = "https://restcountries.com/v3.1/all"

export default function CountriesList() {
    const [countriesList, setCountriesList] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsPerPage] = useState(9);
    const [userInput, setUserInput] = useState("");

    const filteredCountriesList = countriesList.filter(country => country.name.common.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()))

    const displayedCountries = filteredCountriesList.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handlePageChange = (event, value) => {
        setPage(value);
    };

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
        <div className="countriesList">
            <div className="countryForm">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 3, width: '25ch' }, 
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor:"hsla(357, 63%, 57%, 0.95)"
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    label="Enter a country" 
                    id="outlined-size-normal"
                    onChange={(e) => setUserInput(e.target.value)} 
                />
            </Box>
            </div>
            <div className="countriesList_container">
                {displayedCountries.map((country, index) => (
                    <div key={index} className="countries_container">
                        <h1>{country.name.common}</h1>
                        <img src={country.flags.png} alt={country.flags.alt} />
                        <h2>{country.region}</h2>
                        <Link to={`/countries/${country.name.common}`}>
                            <button>More details</button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <Stack spacing={4}>
                <Pagination
                    count={Math.ceil(countriesList.length / itemsPerPage)}
                    color="primary"
                    page={page}
                    onChange={handlePageChange}
                />
                </Stack>
            </div>
        </div>
    );
}