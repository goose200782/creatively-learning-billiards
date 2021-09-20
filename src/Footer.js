import React from 'react';
import logo from './test.jpeg';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer font paddingBottom5 white flex alignCenter' id='footer'>
            <div className='footLogo'>
                <img src={logo} alt='logo' className='ftlogo'/>
            </div>
          
            <div className='flexCol mt10'>
                <h5>Contact</h5>
                <span className=''>Charles Butler</span>
                <span className='mt10 yellow'>504-233-2540</span>
                <span className='mt10' >c.l.billiards@gmail.com</span>
                
                <a href="https://www.instagram.com/c.l.billiards/" className="fl_inst2 mt10">
                    <i className="fa fa-instagram"></i> <span>Instagram</span>
                </a>
                <Link to='/quote' className='text-link'><button className='square_btn mt10 ftQte'>Get a Quote</button></Link>
            </div>
        </div>
    )
}

export default Footer
