import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItineraryCity } from '../store/actions/itineraryActions';
import { useParams } from 'react-router-dom';

//Component

const OneCityItinerary = () => {
    document.title = 'My Tinerary - City Itinerary';
    const { city } = useParams()

    const data = useSelector(state => state.cities.cities.data);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        const loadItineraries = () => {
            dispatch(fetchItineraryCity(city))
        };
        loadItineraries();
    },[dispatch, city])

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

export { OneCityItinerary };