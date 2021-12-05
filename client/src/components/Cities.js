import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Cities = () =>{
    const url = 'http://localhost:5000/';
    const [data, setData] = useState('');

    useEffect(() => {
        getAllData()
    }, []);

    const getAllData = () => {

        axios.get(`${url}cities/all`)
        .then((response) => {
            const allCities = response.data;
            //add data to state
            setData(allCities)
    })
    .catch(error => console.error(`Error: ${error}`));
    }
    console.log(data)
    return(
        Object.keys(data).map((x) => {
            return(
                <ul key={data[x]._id}>
                    <li>{data[x].name}</li>
                    <li>{data[x].country}</li>
                    <li>{data[x]._id}</li>
                    <li>{data[x].image}</li>
                </ul>
        )
        })
    )
};

export {Cities}
