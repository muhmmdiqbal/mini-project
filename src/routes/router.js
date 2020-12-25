import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CarouselHome from '../components/Carousel';
import Detailpage from '../components/Detailpage';
import ListBrowser from '../components/ListBrowser';
import Paginations from '../components/pagination';
import Profile from '../components/Profile';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <CarouselHome />
          <ListBrowser />
          <Paginations />
        </Route>
        <Route exact path='/profile' component={Profile} />
        <Detailpage />
      
      </Switch>
    </Router>
  )
}

export default routes