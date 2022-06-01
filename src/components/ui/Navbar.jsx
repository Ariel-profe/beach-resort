import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa'; 

import logo from '../../../public/images/logo.svg'
 

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className="nav-header">
                <Link to='/' >
                    <img src={logo} alt='logo' />
                </Link>
            
            <button 
                className='nav-btn'
                onClick={handleToggle}>
                    <FaAlignRight className='nav-icon' />
            </button>
            </div> {/* navheader */}
            <ul
                className={isOpen ? 'nav-links show-nav' : 'nav-links'}
            >
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/rooms'>
                        Rooms
                    </NavLink>
                </li>
                
            </ul>

        </div>
    </nav>
  )
}
