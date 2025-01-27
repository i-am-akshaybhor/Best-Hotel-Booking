import React from 'react'
import Hotels from './Hotels'
import {hotels} from "../../data"
const BestHotels = () => {
  return (
    <Hotels hotels={hotels} heading="Best Hotels" />
  )
}

export default BestHotels
