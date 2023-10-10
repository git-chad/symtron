

import React from 'react'
import Footer from '../components/footer-module/footer'
import Navbar from '../components/navbar/navbar-component'
import ContactUs from '../components/contactUs-page/contactus'

const Page = () => {
    return (
        <div className=''>
            <Navbar/>
            <ContactUs/>    
            <Footer/>      
        </div>
    )
    }

export default Page