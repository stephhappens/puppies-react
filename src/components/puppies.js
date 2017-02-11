import React, {Component} from 'react';
import './App.scss';

class Puppies extends Component {
    render() {
        return (
            <div class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column is-4">
                            <nav class="panel">
                                <p class="panel-heading title is-5">
                                    Adopt a puppy!
                                </p>
                                <div class="panel-block">
                                    <div class="media">
                                        <div class="media-left">
                                            <p class="image is-96x96">
                                                <img src="puppy.image_url">

                                                </p>
                                            </div>
                                            <div class="media-right">
                                                <h2>Puppy Name</h2>
                                                <h3>
                                                    <a href="#">
                                                        Read more.
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            {/* <div class="column is-8">
          {/* <router-view
            v-bind:apiUrl= "apiUrl"
            v-bind:puppies= "puppies"
            @addPuppy="addPuppy"
            @updatePuppy="updatePuppy"
            @deletePuppy="deletePuppy"
            >

          </router-view> */
                        } < /div> */}
                        </div>
                    </div>
