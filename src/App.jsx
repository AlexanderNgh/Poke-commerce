import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react'

import HomePage from './Pages/HomePage.jsx'
import ShopPage from './Pages/shopPage.jsx'
import CartPage from './Pages/cartPage.jsx'

function App() {
  //stateful so that we can update them 
  //not directly passed to any of the updater components
  //used by the cart page to render the actual cart
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState([]);
  const [cost, setCost] = useState([]);

  //function that handles adding the info to each 
  //of the states, which will pass it to the components that need to be updates
  
  const addToCart = (item, amt, total) => {

    if(isNaN(total)){
      return;
    }
    setCart((cart)=>[...cart, item]);
    setQty((qty)=>[...qty, amt]);
    setCost((cost)=>[...cost, total]);

    console.log(cart)
  }


  function deleteItem(index){  
    if(index === 0){
      setCart([])
      setQty([])
      setCost([])

      console.log("emptied cart")
    }
    const updateCart = cart.filter((_, i) => i !== index)
    const updateQty = qty.filter((_, i) => i !== index)
    const updateCosts = cost.filter((_, i) => i !== index)

    setCart(updateCart)
    setQty(updateQty)
    setCost(updateCosts)
  }
    return(
        <>
          <BrowserRouter basename="/Poke-commerce/">
            <Routes>
              <Route index element ={<HomePage addToCart = {addToCart}></HomePage>}></Route>
              <Route path='/home' element={<HomePage addToCart = {addToCart}></HomePage>}></Route>
              <Route path='/shop' element={<ShopPage addToCart = {addToCart}></ShopPage>}></Route>
              <Route path='/cart' element={<CartPage items = {cart} qty = {qty} cost = {cost} deleteItem = {deleteItem}></CartPage>}></Route>
            </Routes>
          </BrowserRouter>
        </>


    );
}

export default App
