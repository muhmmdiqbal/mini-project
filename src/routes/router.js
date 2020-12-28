import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Detailpage from '../components/Detailpage';
import Profile from '../components/Profile';
import Action from '../components/Action';
import Comedy from '../components/Comedy';
import Drama from '../components/Drama';
import Animation from '../components/Animation';
import Biography from '../components/Biography';
import ListBrowser from '../components/ListBrowser';
import Paginations from '../components/pagination';
import CarouselHome from '../components/Carousel';
// import Card from '../components/Card';


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
        <Route path='/detailpage' exact>
          <Detailpage />
        </Route>
            <Route path="/action" exact>
              <Action />
              </Route> 
            <Route path="/comedy" exact>
              <Comedy />
            </Route>
            <Route path="/drama" exact>
              <Drama />
            </Route>
            <Route path="/animation" exact>
              <Animation />
            </Route>
            <Route path="/biography" exact>
              <Biography />
            </Route> 
             {/* <Route path="/card" exact>
              <Card />  
            </Route> */}
      </Switch>
    </Router>
  )
}

export default routes





// const routes = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path='/profile'>
//           <Profile />
//         </Route>
//         <Route path='/carousel'>
//           <CarouselHome />
//         </Route>
//         <Route path='/listbrowser'>
//           <ListBrowser />
//         </Route>
//         <Route path='/detailpage'>
//           <Detailpage />  
//         </Route>
//         <Route path='/pagination'>
//           <Paginations />
//         </Route>
//         <Route exact path='/' component={Card} /> 
//       </Switch>
//     </Router>
//   )
// }

// export default routes