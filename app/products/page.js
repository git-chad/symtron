"use client"
import React, { useEffect } from 'react'
import ProductsComponent from '../components/products-module/products-component'
import Lenis from '@studio-freight/lenis'
import Cursor from '../components/custom-cursor/cursor'

const Page = () => {

  useEffect(() => {
    // lenis-smooth scroll, re-use in every page!
    const lenis = new Lenis();

    // smooth scroll function
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <div className=''>
        <ProductsComponent/>    
        <Cursor/>
    </div>
  )
}

export default Page