import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Landing } from './Landing';

const Router = ()=>{
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default Router