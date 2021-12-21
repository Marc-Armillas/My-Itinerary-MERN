import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from '../store/actions/cityActions';

//Component

const Cities = () => {
    document.title = 'My Tinerary Cities';
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
                             placeholder = 'type to filter the city'
                             value = {filter}
                             onChange = {event => setFilter(event.target.value) || filter === ''}
                         />
                         <ul style={{listStyleType : 'none'}}>
                             {data && data.filter(f => f.name.toLowerCase().startsWith(filter.toLocaleLowerCase()))
                                 .map(x => <li key={x._id}>{x.name}</li>)}
                         </ul>
                     </div>
    )
};

export { Cities };