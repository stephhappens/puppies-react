import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';
import PuppiesIndex from './components/puppies-index';
import PuppiesDetail from './components/puppies-detail';
import './index.css';

const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/stephanie';

// const routes = {
//   path: '/',
//   component: App,
//   indexRoute: {component: App},
//   childRoutes: [
//     {path: 'puppies', component: Puppies },
//     {path: 'puppies-detail', component: PuppiesDetail }
//   ]
// }

class App extends Component {
    componentWillMount() {
        this.setState({puppies: []});
        fetch(apiUrl, {method: 'GET'}).then((r) => r.json()).then((puppies) => {
            this.setState({puppies})
        });
    }

    render() {
        return (
            <div>
                <nav className="nav has-shadow is-info">
                    <div className="nav-left">
                        <a href="#" className="nav-item is-brand">
                            Nashville Puppy Adoption
                        </a>
                    </div>

                    <div className="nav-center">
                        <a href="#" className="nav-item">All Puppies</a>
                        <a href="#" className="nav-item">Add Puppy</a>
                    </div>
                </nav>
                <div className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-one-third">
                            <nav className="panel">
                                <p className="panel-heading">
                                    Adopt a puppy!
                                </p>

                                {this.state.puppies.map((puppy) => (
                                    <div className="panel-block">
                                        <div className="media">
                                            <div classNamxe="media-left">

                                                <p classNames="image is-96x96">
                                                    <img src={puppy.image_url}/>
                                                </p>
                                            </div>
                                            <div className="media-right">
                                                <h2>{puppy.name}</h2>
                                                <a href="#"><h3>Read more.</h3></a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </nav>
                        </div>

                            <PuppiesIndex puppies={this.state.puppies}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
