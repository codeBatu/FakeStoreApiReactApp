import axios from 'axios'
import React from 'react'

var url = 'https://fakestoreapi.com'
const getProductsService = async () => {
  var response = await axios.get(`${url}/products`)
  console.log(response.data)
  return response.data
}

export { getProductsService }
