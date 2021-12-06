import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Landing } from './Landing';
import { Cities } from './Cities';

const Router = ()=>{
  const title = 'My Tinerary'; 
    return (
      <BrowserRouter>
        <div className="App">
          {document.title = title}
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/cities' component={Cities} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default Router