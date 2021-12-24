import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Landing } from './Landing';
import { Cities } from './Cities';
import { Itineraries } from './Itineraries';
import { OneCityItinerary } from './OneCityItinerary';


const Router = ()=>{
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/cities' component={Cities} />
            <Route path='/itineraries/all' component={Itineraries} />
            <Route path='/intineraries/:city' component={OneCityItinerary} />
          </Switch>
      </BrowserRouter>
    );
}

export default Router