import { Container } from 'react-bootstrap';
import { Link, HashRouter, Route } from 'react-router-dom';
import Cards from '../components/Card';
// import Action from '../components/Action';
// import Comedy from '../components/Comedy';
// import Drama from '../components/Drama';
// import Animation from '../components/Animation';
// import Biography from '../components/Biography';

const ListBrowser = () => {
    return(
        <Container>
        <div className="list browser pb-5 mb-4 d-inline">
            <h1>Browse by Category</h1>
            <ul className="header">
            <li><Link to="/">All</Link></li>
            <li><Link to="/action">Action</Link></li>
            <li><Link to="/comedy">Comedy</Link></li>
            <li><Link to="/drama">Drama</Link></li>
            <li><Link to="/animation">Animation</Link></li>
            <li><Link to="/biography">Biography</Link></li>
          </ul>
          <div className="bodycard">
            <Cards />
            {/* <HashRouter>
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
            </HashRouter> */}
          </div>
           
        </div>
        </Container>
    )
}

export default ListBrowser;