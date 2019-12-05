import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'

import DeviceContainer from '../containers/DeviceContainer'
import { GET_DEVICES } from '../../queries'

const Devices = () => {
  const { loading, error, data } = useQuery(GET_DEVICES)
  

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)
  return (
    <ul>
      {data.devices.map(({ id, year, brand, model, price, characterId }) => (
      <Container>
        <List>
          <DeviceContainer
            key={id}
            id={id}
            year={year}
            brand={brand}
            model={model}
            price={price}
            characterId={characterId}
          />
        </List>
      </Container>
      ))}
    </ul>
  )
}

export default Devices
