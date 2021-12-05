import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Landing } from './Landing';
import { Cities } from './Cities';

const Router = ()=>{
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/cities' component={Cities} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default Router