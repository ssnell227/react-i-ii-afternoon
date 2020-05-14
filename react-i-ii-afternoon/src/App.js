import React, { Component } from 'react';
import dataArray from './data/data'
import Display from './components/display/display'
import Button from './components/button/button'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: dataArray,
      current: 0,
    }
    this.switchPerson = this.switchPerson.bind(this)
    this.deletePerson = this.deletePerson.bind(this)
  }

  switchPerson(e) {
    let current = this.state.current
    if (
      e.target.name === '< Previous' &&
      current >= 1) {
      current--
    } else if (
      e.target.name === 'Next >' &&
      current < this.state.data.length -1) {
      current++
    }

    this.setState({
      current
    })
  }

  deletePerson () {
    let {data, current} = this.state
    data.forEach(item => {
      if (item.id > current) {
      item.id--
      }
    })
    data.splice(current, 1)
    this.setState({
      data
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
            <Button name='< Previous' class='nav-button' runFunction={this.switchPerson} />
            <div className='modify'>
              <Button class='modify-button' name='Edit' />
              <Button runFunction={this.deletePerson} class='modify-button' name='Delete' />
              <Button class='modify-button' name='New' />
            </div>
            <Button name='Next >' class='nav-button' runFunction={this.switchPerson} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
