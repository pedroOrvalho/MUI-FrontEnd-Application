import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination, Stack } from '@mui/material';


const countriesUrl = "https://restcountries.com/v3.1/all"

export default function CountriesList() {
    const [countriesList, setCountriesList] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsPerPage] = useState(9);
    const displayedCountries = countriesList.slice(
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