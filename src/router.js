import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Profile from './components/Profile';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </Router>
  )
}

export default routes