import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CarouselHome from '../components/Carousel';
import Detailpage from '../components/Detailpage';
import ListBrowser from '../components/ListBrowser';
import Paginations from '../components/pagination';
import Profile from '../components/Profile';
import Detailpage from '../components/Detailpage';



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