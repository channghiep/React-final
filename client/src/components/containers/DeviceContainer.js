import React, { Component } from 'react'
import Device from '../listItems/Device'

class DeviceContainer extends Component {

  state = {
    id: this.props.id || '',
    year: this.props.year || '',
    brand: this.props.brand || '',
    model: this.props.model || '',
    price: this.props.price || '',
    editMode:  false
}

  render() {
    const { id, year, brand, model, price, editMode} = this.state
    return (
      <Device
        editMode = {editMode}
        key={id}
        id={id}
        year={year}
        brand={brand}
        model={model}
        price={price}
      />
    )
  }
}

export default DeviceContainer
