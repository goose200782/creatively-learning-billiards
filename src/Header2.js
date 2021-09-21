import React, { useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import CloseIcon from '@material-ui/icons/Close';
import logo from './test.jpeg';

function Header2() {
    useEffect(() => {
        document.getElementById('hamburger').addEventListener('click', toggleShow);
        document.getElementById('closeIcon').addEventListener('click', toggleShow);
    }, []);

    const toggleShow = () => {
        document.getElementById('menu').classList.toggle('show')
    }

    return (
        <div className='header flex spaceBetween alignCenter'>
            <MenuIcon  id='hamburger'/>
            <img src={logo} alt='logo' className='logo' id='logo' onClick={()=>window.scrollTo(0,0)} />
            <LocalPhoneIcon  />
            <div className='menu flexCol' id='menu'>
                <CloseIcon fontSize='large' id='closeIcon'/>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header2
