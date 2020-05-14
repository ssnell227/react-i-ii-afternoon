import React, { Component } from 'react';
import data from './data/data'
import Display from './components/display/display'
import Button from './components/button/button'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      current: 1,
    }
    this.switchPerson = this.switchPerson.bind(this)
  }

  switchPerson(e) {
    let current = this.state.current
    console.log(current)
    if (
      e.target.name === '< Previous' &&
      current >= 2) {
      current--
    } else if (
      e.target.name === 'Next >' &&
      current < this.state.data.length) {
      current++
    }


    this.setState({
      current
    })
  }


  render() {
    return (
      <div className="App">
        <header>
          <Button name='Home' class='header-nav' />
        </header>
        <main>
          <Display data={this.state.data} current={this.state.current} />
          <div className='buttons'>
            <Button name='< Previous' class='nav-button' switchPerson={this.switchPerson} />
            <div className='modify'>
              <Button class='modify-button' name='Edit' />
              <Button class='modify-button' name='Delete' />
              <Button class='modify-button' name='New' />
            </div>
            <Button name='Next >' class='nav-button' switchPerson={this.switchPerson} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
