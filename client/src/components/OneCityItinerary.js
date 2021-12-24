import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams }from 'react-router-dom'
import { fetchItineraryCity } from '../store/actions/itineraryActions';

const OneCityItinerary = () => {
    document.title = 'My Tinerary - City';
    const {city} = useParams();
    const cityToFetch = city.toLowerCase()
    const data = useSelector(state => state.cities.cities.data)
    const dispatch = useDispatch();
    console.log(data, 'dataaaaaa')

    useEffect(() => {
        const loadCityItinerary = () => {
            dispatch((fetchItineraryCity(cityToFetch)))
        };
        loadCityItinerary();
    },[dispatch, cityToFetch]);
    
    return(
        <ul>
            <h1>City Itinerary</h1>
            {data && data.map(x => 
                <div key={x._id}>
                    <li>{x.name}</li>
                    <li>{x.rating}</li>
                    <li>{x.duration}</li>
                    <li>{x.price}</li>
                    <img alt={x.city_name} src={x.profile}></img>
                    <li>{x.hashtag}</li>
                </div>)}
        </ul>
    )
}

export { OneCityItinerary };