import React, { Component } from 'react'
import './input.css'

import Button from '../button/button'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            city: '',
            country: '',
            employer: '',
            title: '',
            favoriteMovies: [],
            inputMovies: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateInputs = this.updateInputs.bind(this)
        this.addMovie = this.addMovie.bind(this)
    }

    updateInputs(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
    }

    handleSubmit () {
        let state = this.state
        let personObj = {
            id: this.props.dataLength +1,
            name: { first: state.firstName, last: state.lastName },
            city: state.city,
            country: state.country,
            employer: state.employer,
            title: state.title,
            favoriteMovies: state.favoriteMovies
          }

          this.props.addPerson(personObj)

    }

    addMovie() {
        let {favoriteMovies} = this.state.favoriteMovies
        favoriteMovies.push(this.state.inputMovies)
        this.setState(favoriteMovies)
    }

    render() {
        return (
            <div className='input'>
                <form>
                    <div>
                    <label>First name: </label>
                    <input value={this.state.firstName} onChange={this.updateInputs} name='firstName'></input>
                    </div>

                    <div>
                    <label>Last name: </label>
                    <input onChange={this.updateInputs} name='lastName'></input>
                    </div>

                    <div>
                    <label>City: </label>
                    <input onChange={this.updateInputs} name='city'></input>
                    </div>

                    <div>
                    <label>Country: </label>
                    <input onChange={this.updateInputs} name='country'></input>
                    </div>

                    <div>
                    <label>Employer:</label>
                    <input onChange={this.updateInputs} name='employer'></input>
                    </div>

                    <div>
                    <label>Title: </label>
                    <input onChange={this.updateInputs} name='title'></input>
                    </div>

                    <div>
                    <label>Favorite movies: {this.state.favoriteMovies}</label>
                    <Button onClick={this.addMovie} name='Add a movie' />
                    <input onChange={this.updateInputs} name='inputMovies'></input>
                    </div>

                    <div>
                    <Button runFunction={this.handleSubmit} name='Submit' />
                    <Button runFunction={this.toggleModal} name='Cancel' />
                    </div>
                </form>
            </div>
        )
    }

}

export default Input