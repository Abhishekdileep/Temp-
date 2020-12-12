import React from 'react'
import Footer from '../footer/index'


function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper >
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title> About Us </Footer.Title>
                        <Footer.Link href='#'> Story </Footer.Link>
                        <Footer.Link href='#'> Client </Footer.Link>
                        <Footer.Link href='#'> Testimonials </Footer.Link>
                    </Footer.Column>
                   
                    <Footer.Column>
                        <Footer.Title> Corporate Office</Footer.Title>
                        <Footer.Link href='#'> G-1304 Havelli Valencia Homes</Footer.Link>
                        <Footer.Link href='#'> Sector 1 Noida West  </Footer.Link>
                        <Footer.Link href='#'> UttarPradesh 201-301 </Footer.Link>
                        <Footer.Link href='#'> info@lakshyabhediclasses.in </Footer.Link>
                    </Footer.Column>
                    
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer
