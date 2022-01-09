import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Landing } from './Landing';
import { Cities } from './Cities';
import { Itineraries } from './Itineraries';
import { OneCityItinerary } from './Itinerary';


const Router = ()=>{
    return (
      <BrowserRouter>
          <div className="App">
            <div><Link to="/"> Landing aquí </Link> </div>
            <div><Link to="cities"> Cities aquí </Link></div>
            <div><Link to="itineraries/all"> Itineraries aquí </Link></div>
          </div>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/itineraries/all' element={<Itineraries />} />
            <Route path='/intineraries/:city' element={<OneCityItinerary />} />
          </Routes>
      </BrowserRouter>
    );
}

export default Router