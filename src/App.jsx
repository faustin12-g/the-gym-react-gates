import React from 'react'
import ProductList from './components/uk/ProductList'
import Landing from './components/uk/Landing'
import { Routes, Route } from 'react-router-dom'
import UserProfileDemo from './components/uk/UserProfileDemo'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/products-filter' element={<ProductList />} />
        <Route path='/user-profile/:id' element={<UserProfileDemo />}>

        </Route>
      </Routes>

      
    </>
  )
}

export default App
