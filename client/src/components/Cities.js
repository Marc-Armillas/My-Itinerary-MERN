import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Cities = () =>{
    const url = 'http://localhost:5000/';
    const [data, getData] = useState('');

    useEffect(() => {
        getAllData()
    }, []);

    const getAllData = () => {

        axios.get(`${url}cities/all`)
        .then((response) => {
            const allCities = response.data;
            //add data to state
            getData(allCities)
    })
    .catch(error => console.error(`Error: ${error}`));
    }
    console.log(data)
    return(
        <h1>hjolalal</h1>
    )
};

export {Cities}
