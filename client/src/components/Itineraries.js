import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItineraries } from '../store/actions/itineraryActions';

//Component

const Itineraries = () => {
    document.title = 'My Tinerary - All Itineraries'
    const data = useSelector(state => state.cities.cities.data);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        const loadItineraries = () => {
            dispatch(fetchItineraries())
        };
        loadItineraries();
    },[dispatch])

    return(
        <div>
            {data && data.map(x => 
                <ul key={x._id}>
                    <li>{x.name}</li>
                    <li>{x.rating}</li>
                    <li>{x.duration}</li>
                    <li>{x.price}</li>
                    <img alt={x.city_name} src={x.profile}></img>
                    <li>{x.hashtag}</li>
                </ul>)}
        </div>
    )
};

export { Itineraries };