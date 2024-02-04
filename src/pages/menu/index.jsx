import React from 'react'
import Navbar from '../../components/navbar'
import CompMenu from '../../components/menucomp'
import Carousel from '../../components/carousel'
const Menu = () => {
  return (
    <div>
    <Navbar />
    <Carousel className="max-h-96 w-full bg-white mb-8"  />
    <CompMenu />
   </div>
  )
}

export default Menu