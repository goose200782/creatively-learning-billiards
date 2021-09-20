// import React from 'react';
import React, { useEffect, useState }  from 'react';
import { Link } from "react-router-dom";
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import logo from './test.jpeg';
import _ from "lodash";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';



function Header() {
    const [icon,setIcon] = useState(()=>(
        <span className='yellow' id='iconSpan'>
            <ExpandMoreIcon id='icon'/>
        </span>));

    useEffect(() => {
       // This function will run a throttled script every 300 ms
var checkHeader = _.throttle(() => { 
    console.log('checkHeader');

    // Detect scroll position
    let scrollPosition = Math.round(window.scrollY);

    // If we've scrolled 100px, add "sticky" class to the header
    if (scrollPosition > 100){
        document.getElementById('header').classList.add('sticky');
        document.getElementById('logo').classList.add('sticky');
    }
    // If not, remove "sticky" class from header
    else {
        document.getElementById('header').classList.remove('sticky');
        document.getElementById('logo').classList.remove('sticky');
    }
}, 300);

// Run the checkHeader function every time you scroll
window.addEventListener('scroll', checkHeader);
    }, []);

    // Used for changing icon of dropdown
    useEffect(() => {
       
    }, [])

    const expanded = () => {
        setIcon(()=>(
            <span className='red' id='iconSpan'>
                <ExpandLessIcon id='icon'/>
            </span>))
    }

    const contracted = () => {
        setIcon(()=>(
            <span className='yellow' id='iconSpan'>
                <ExpandMoreIcon id='icon'/>
            </span>))
    }
    
    return (
        <div className="header white flex alignCenter" id='header'>
            <a href='#home'><img src={logo} alt='logo' className='logo' id='logo' onClick={()=>window.scrollTo(0,0)} /></a>
            <div className='navLinks'>
                <ul>
                    <li onClick={()=>window.scrollTo(0,0)}><Link to='/' className='text-link link'>Home</Link></li>

                    <div className="dropdown" id='drop'>
                        <li key='1'><Link to='/services' className='text-link link'><div className='flex text-link link' onMouseEnter={expanded} onMouseLeave={contracted}>Services {icon}</div></Link></li>
                        <div id="myDropdown" className="dropdown-content"  onMouseEnter={expanded} onMouseLeave={contracted}>
                        <Link to='/book' className='text-link fontSize1'>Book Training</Link>
                            <Link to='/quote' className='text-link fontSize1'>Consolutation</Link>
                            <Link to='/league' className='text-link fontSize1'>Join League</Link>
                        </div>
                    </div>

                    <li key='2'><Link to='/aboutUs' className='text-link link'>About</Link></li>
                    <li key='3'><Link to='/contact' className='text-link link mr20'>Contact</Link></li>
                </ul>
            </div>
            <div className="phone">
                <LocalPhoneIcon className='blue marRigh' fontSize='large'/>
                <span className='bigger mr20 yellow'>504-233-2540</span>
            </div>
        </div>
    )
}

export default Header
