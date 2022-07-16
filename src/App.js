import React, { useEffect } from 'react'
import {
  Button,
  Grid,
  Card,
  Divider,
  CardContent,
  Image,
} from 'semantic-ui-react'
import Navbar from './components/Nav/Navbar'
import style from './style/style'
import { getProductsService } from './api/ApiServices'
import toast, { Toaster } from 'react-hot-toast'
import Cards from './components/Card/Card'
import Grids from './components/Grid/Grids'

const App = () => {
  const [basketList, setBasketList] = React.useState([{}])
  const [products, setProducts] = React.useState([{}])
  useEffect(() => {
    getProductsService()
      .then((item) => {
        setProducts(item)
      })
      .catch((err) => {
        toast.error(err.message)
      })
      .finally(() => {
        console.log('finally')
      })
  }, [])
  const addBasketList = (item) => {
    setBasketList([...basketList, item])
    toast.success(`Add item `)
  }

  return (
    <>
      <Toaster position="top-right" />
      <Navbar basketCount={basketList.length - 1} basket={basketList} />
      <Divider></Divider>
      <Grids products={products} func={addBasketList}></Grids>
    </>
  )
}

export default App
