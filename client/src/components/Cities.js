/* eslint-disable react/jsx-no-comment-textnodes */
import { React, useEffect, useState } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import { fetchCities } from '../store/actions/cityActions';

//Component

const Cities = () => {
    document.title = 'My Tinerary - Cities';
    const [filter, setFilter] = useState('');
    const data = useSelector(state => state.cities.cities.data);
    const dispatch = useDispatch();
    // console.log(data)

    useEffect(() => {
        const loadCities = () => {
            dispatch(fetchCities())
        };
        loadCities();
    },[dispatch])

    return(
        <div style={{textAlign: 'center'}}>
                         <input 
                             name = 'input'
                             type = 'text'
                             placeholder = 'type to filter the city or country'
                             value = {filter}
                             onChange = {event => setFilter(event.target.value) || filter === ''}
                         />
                         <ul style={{listStyleType : 'none'}}>
                             {data && data.filter(f => f.name.toLowerCase().startsWith(filter.toLocaleLowerCase()) || 
                             f.country.toLowerCase().startsWith(filter.toLocaleLowerCase()))
                                 .map(x => 
                                    <div key={x._id}>
                                        <li>{x.name} //// {x.country}</li>
                                        <img  alt={x.name} src={x.image} />
                                    </div>)}
                         </ul>
                     </div>
    )
};

export { Cities };