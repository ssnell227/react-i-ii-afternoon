import React, { Component } from 'react';
import dataArray from './data/data'
import Display from './components/display/display'
import Button from './components/button/button'
import Input from './components/input/input'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: dataArray,
      current: 0,
      modal: '',
    }
    this.switchPerson = this.switchPerson.bind(this)
    this.deletePerson = this.deletePerson.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.addPerson = this.addPerson.bind(this)
  }

  switchPerson(e) {
    let current = this.state.current
    if (
      e.target.name === '< Previous' &&
      current >= 1) {
      current--
    } else if (
      e.target.name === 'Next >' &&
      current < this.state.data.length - 1) {
      current++
    }

    this.setState({
      current
    })
  }

  deletePerson() {
    let { data, current } = this.state
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

  addPerson(obj) {
    let { data } = this.state
    data.push(obj)
    this.setState({
      data
    })
    console.log(obj)
  }

  toggleModal() {
    let modal = this.state.modal === '' ? 'on' : ''
    this.setState({
      modal
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
              <Button runFunction={this.toggleModal} class='modify-button' name='New' />
            </div>
            <Button name='Next >' class='nav-button' runFunction={this.switchPerson} />
          </div>
        </main>
        {/* toggle modal function needs built, check if ID works */}
        <div className={`modal ${this.state.modal}`}>
          <Input dataLength={this.state.data.length} addPerson={this.addPerson} toggleModal={this.toggleModal} />
        </div>
      </div>
    );
  }
}

export default App;
