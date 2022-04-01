import React, { Component } from 'react'

export default class ChildName extends Component {
  render() {
    return (
      <div>
          <h2>
              first name : {this.props.firstName}
          </h2>
          <h2>
              last name : {this.props.lastName}
          </h2>
      </div>
    )
  }
}
