import { Container } from 'react-bootstrap'
import Cards from '../components/Card';
import Action from '../components/Action';
import Comedy from '../components/Comedy';
import Drama from '../components/Drama';
import Animation from '../components/Animation';
import Biography from '../components/Biography';
import { HashRouter, NavLink, Route } from 'react-router-dom';


const ListBrowser = () => {
    return(
        <Container>
        <HashRouter>
        <div className="list browser pb-5 mb-4 d-inline">
            <h1>Browse by Category</h1>
            <ul className="header">
            <li><NavLink active tag="a" exact to="/">All</NavLink></li>
            <li><NavLink to="/Action">Action</NavLink></li>
            <li><NavLink to="/Comedy">Comedy</NavLink></li>
            <li><NavLink to="/Drama">Drama</NavLink></li>
            <li><NavLink to="/Animation">Animation</NavLink></li>
            <li><NavLink to="/Biography">Biography</NavLink></li>
          </ul>
          <div className="routerlist">
          <Route exact path="/" component={Cards}/>
            <Route exact path="/Action" component={Action}/>
            <Route exact path="/Comedy" component={Comedy}/>
            <Route exact path="/Drama" component={Drama}/>
            <Route exact path="/Animation" component={Animation}/>
            <Route exact path="/Biography" component={Biography}/>
          </div>
           
        </div>
        </HashRouter>
        </Container>
    )
}

export default ListBrowser;