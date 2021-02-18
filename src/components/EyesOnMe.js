// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  render() {
    return(

      <button onFocus={console.log(`'Good!'`)} onBlur={`'Hey! Eyes on me!'`}></button>
    )
  }
}
