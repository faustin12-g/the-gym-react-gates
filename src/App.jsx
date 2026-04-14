import React from 'react'
import ProductList from './components/uk/ProductList'
import Landing from './components/uk/Landing'
import { Routes, Route } from 'react-router-dom'
import UserProfileDemo from './components/uk/UserProfileDemo'
import TouchTypingApp from './components/uk/TouchTypingApp '
import NameTransferLists from './components/uk/NameTransferLists '
import Lazy from './Lazy'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/products-filter' element={<ProductList />} />
        <Route path='/user-profile/:id' element={<UserProfileDemo />} />
        <Route path='/touch-typing-app' element={<TouchTypingApp />} />
        <Route path='/name-transfer' element={<NameTransferLists />}/>
        <Route path='/lazy-suspense' element={<Lazy />} />
      </Routes>

      
    </>
  )
}

export default App
