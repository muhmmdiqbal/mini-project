import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CardBD from '../components/Card';
import CarouselHome from '../components/Carousel';
import Profile from '../components/Profile';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <CarouselHome />
          <CardBD/>
        </Route>
        <Route exact path='/profile' component={Profile} />

      </Switch>
    </Router>
  )
}

export default routes