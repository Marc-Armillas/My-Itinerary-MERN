import React, { useState, useEffect } from 'react';
import axios from 'axios'

//Component
const Cities = () =>{
    const url = 'http://localhost:5000/';
    const [data, setData] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        document.title = 'My Tinerary Cities'
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
            <div style={{textAlign: 'center'}}>
                <input 
                    name = 'input'
                    style = {{textAlign : 'center'}}
                    type = 'text'
                    placeholder = 'type to filter the city'
                    value = {filter}
                    onChange = {event => setFilter(event.target.value) || filter === ''}
                />
                <ul style={{listStyleType : 'none'}}>
                    {Object.keys(data).filter(f => data[f].name.toLowerCase().startsWith(filter.toLocaleLowerCase()))
                        .map(x => <li key={data[x]._id}>{data[x].name}</li>)}
                </ul>
            </div>
    )
};

export {Cities}
