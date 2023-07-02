import React from "react"
import { API } from "../api"

export const GetProducts = () => {
  const [ products, setProducts ] = React.useState(null) 

  React.useEffect(() => {
    API.getProducts()
      .then(res => setProducts(res.data))
  }, [])

  return {
    products
  }
} 





export const GetPromocodes = () => {
  const [ promocodes, setPromocodes ] = React.useState(null)

  React.useEffect(() => {
    API.getPromocodes()
      .then(res => setPromocodes(res.data))
  }, [])

  return{
    promocodes
  }
}