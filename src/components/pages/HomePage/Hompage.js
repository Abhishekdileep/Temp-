import React from 'react'
import PageTemplate from '../PageTemplate';
import {HomeObj1 , HomeObj2 } from './Data';
import Navbar from '../../Navbar/Navbar';
import FooterContainer from '../FooterContainer'
import Footer from '../../Footer2/Footer'
function Hompage() {
    return (
        <>
            <Navbar />
            <PageTemplate {...HomeObj1} />
            <PageTemplate {...HomeObj2} />
            <Footer />

        </>
    )
}

export default Hompage
