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

export const GetSingleProducts = (id) => {
  const [product, setProduct] = React.useState(null)

  React.useEffect(() => {
    API.getSingleProduct(id)
      .then(res => setProduct(res.data))
  }, [])

  return {
    product
  }
} 

export const ScrollTop = () => {
  window.scrollTo({
    top: 0
  })
}

export const GetPolicy = () => {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    API.getPolicy().then(r => setData(r.data))
  }, [])
  
  return {
    data
  }
}