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

    handleSubmit() {
        let state = this.state
        let personObj = {
            id: this.props.dataLength + 1,
            name: { first: state.firstName, last: state.lastName },
            city: state.city,
            country: state.country,
            employer: state.employer,
            title: state.title,
            favoriteMovies: state.favoriteMovies
        }
        if (personObj.name.first !== '') {
            this.props.addPerson(personObj)
            this.props.toggleModal()
        } else {
            window.alert('Enter a name')
        }

    }

    addMovie() {
        let { favoriteMovies } = this.state.favoriteMovies
        favoriteMovies.push(this.state.inputMovies)
        this.setState(favoriteMovies)
    }

    render() {
        return (
            <div className='input'>
                <form>
                    <div className='meta-container'>
                        <div className='input-item'>
                            <label>First name: </label>
                            <input value={this.state.firstName} onChange={this.updateInputs} name='firstName'></input>
                        </div>

                        <div className='input-item'>
                            <label>Last name: </label>
                            <input onChange={this.updateInputs} name='lastName'></input>
                        </div>
                    </div>

                    <div className='meta-container'>
                        <div className='input-item'>
                            <label>City: </label>
                            <input onChange={this.updateInputs} name='city'></input>
                        </div>

                        <div className='input-item'>
                            <label>Country: </label>
                            <input onChange={this.updateInputs} name='country'></input>
                        </div>
                    </div>

                    <div className='meta-container'>
                        <div className='input-item'>
                            <label>Employer:</label>
                            <input onChange={this.updateInputs} name='employer'></input>
                        </div>

                        <div className='input-item'>
                            <label>Title: </label>
                            <input onChange={this.updateInputs} name='title'></input>
                        </div>
                    </div>

                    <div className='meta-container'>
                        <label>Favorite movies: </label>
                        <p>{this.state.favoriteMovies}</p>
                        <div className='input-item'>
                            <Button onClick={this.addMovie} name='Add a movie' />
                            <input onChange={this.updateInputs} name='inputMovies'></input>
                        </div>
                    </div>
                </form>

                <div className='input-item'>
                    <Button runFunction={this.handleSubmit} name='Submit' />
                    <Button runFunction={this.props.toggleModal} name='Cancel' />
                </div>
            </div>
        )
    }

}

export default Input