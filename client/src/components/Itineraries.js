import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItineraries } from '../store/actions/itineraryActions';

//Component

const Itineraries = () => {
    document.title = 'My Tinerary - Itineraries'
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
            <p>All itineraries</p>
        </div>
    )
};

export { Itineraries };