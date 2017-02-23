import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';
import PuppiesIndex from './puppies-index';

const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/stephanie';

class PuppiesDetail extends Component {
  componentDidMount() {
      this.setState({puppies: []});
      fetch(apiUrl, {method: 'GET'}).then((r) => r.json()).then((puppies) => {
          this.setState({puppies})
      });
  }
    render() {
      const puppy = this.state.puppy;

      return (<div className= "">
    <div className="card is-fullwidth">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={puppy.image_url}/>
            </figure>

            <div className="card-content">
                <p className="title is-5">{puppy.name}</p>
                <div className="content">
                    <p>Age: {puppy.age}</p>
                    <p>Sex: {puppy.sex}</p>
                    <p>Color: {puppy.color}</p>
                    <p>Breed: {puppy.breed}</p>
                    <p>About Me: {puppy.description}</p>
                </div>
            </div>
        </div>

        <footer class="card-footer">
            <button className="card-footer-item button is-primary">Adopt Me</button>
            <div className="notification is-success card-footer-item">I've been adopted!</div>
            <button className="card-footer-item button is-primary">Delete Puppy</button>
        </footer>
    </div>
  </div>)
};
}
export default PuppiesDetail;
