import React, {Component} from 'react';

class Puppies extends Component {
    componentWillMount() {}

    render() {
        return (
            <div className="">
              <div class="column is-three-quarters">
                <div className="container">
                    <p className="title is-2">Available Puppies</p>
                    <table className="table is-fullwidth">
                        <thead>
                            <th>Name</th>
                            <th>Age</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {this.props.puppies.map((puppy) => (
                                <tr>
                                    <td>{puppy.name}</td>
                                    <td>{puppy.age}</td>
                                    <td>Read more</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
        )
    }
}
export default Puppies;
