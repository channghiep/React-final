import React, { Component } from 'react'
import Character from '../listItems/Character'

class CharacterContainer extends Component {

  state = {
    id: this.props.id || '',
    firstName: this.props.firstName || '',
    lastName: this.props.lastName || '',
    editMode:  false
}

  render() {
    const { id, firstName, lastName, editMode} = this.state
        console.log(id)
        console.log(firstName)
        console.log(lastName)
    return (
      <Character 
        editMode = {editMode}
        id={id}
        firstName={firstName}
        lastName={lastName}
      />
    )
  }
}

export default CharacterContainer