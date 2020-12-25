import React, { Component, Fragment } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { data } from '../components/database';
import { HashRouter, Route, Link } from 'react-router-dom';
import Detailpage from '../components/Detailpage';


class Biography extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: data
        }
    }

    // componentDidMount(){
    //     axios.get("https://api.github.com/users/syomily/repos")
    //     .then(res => {
    //         const items = res.data
    //         this.setState({items});
    //     })
    //     .catch(err => console.log('parsing data is failed, err'))
    // }

    render(){
        const{data} = this.state
        console.log(data, 'cards')
        return(
            <CardColumns>
            <Fragment>
                {data ? this.state.data.map((Database1, image) => {
                    return (
                        <HashRouter>
                        <div className="kotak  mb-4">
                            <Link to="/detailpage">
                            <Card>
                                <Card.Img width="50" variant="top" src={Database1.image} />
                                <Route exact path="/Detaipages" component={Detailpage}/>
                                <Card.Body>
                                    <Card.Title>{Database1.title}</Card.Title>
                                    <Card.Text>{Database1.genre}</Card.Text>
                                </Card.Body>               
                            </Card>
                            </Link>
                        </div>
                        </HashRouter>    
                    )
                } ):null}
                
            </Fragment>
            </CardColumns>   
        )    
    }
}

export default Biography;



