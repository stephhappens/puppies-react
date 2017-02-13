import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './index.scss';

class App extends Component {
    render() {
        return (
              <nav className="nav">
                  <div className="nav-left">
                      <a href="#" className="nav-item is-brand">
                          Nashville Puppy Adoption
                      </a>
                  </div>

                  <div className="nav-center">
                      <a href="#" className="nav-item">
                          All Puppies
                      </a>
                      <a href="#" className="nav-item">
                          Add Puppy
                      </a>
                  </div>
              </nav>
        );
    }
}

export default App;
