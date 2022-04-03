import React, { Component } from 'react'
import ChildName from './ChildName'

export default class ParentName extends Component {
    state ={
        firstName : 'naufal',
        lastName : 'firdaus'
    }
  render() {
    return (
      <div>
          <ChildName
          firstName = {this.state.firstName}
          lastName = {this.state.lastName}
          />
      </div>
    )
  }
}
