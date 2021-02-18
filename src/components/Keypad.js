// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {

  handleKeyUp() {

  }

  render() {
    return(

      <input keyUp={(e) => {this.handleKeyUp}}type="password"></input>
    )
  }
}
