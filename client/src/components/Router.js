import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Landing } from './Landing';
import { Cities } from './Cities';
import { Itineraries } from './Itineraries';

const Router = ()=>{
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/cities' component={Cities} />
            <Route path='/itineraries' component={Itineraries} />
          </Switch>
      </BrowserRouter>
    );
}

export default Router