import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header className='site-header'>
            <div className='name'>
                 <div className='header-link' 
                >
                     <h1>Gre<Link className='secret-link' to="/secret">g</Link> Danko</h1></div>
            </div>
            <div className='send-message '>
            <a to='/contact' className='link-message' href="mailto:gregdanko92@gmail.com">Contact</a>
            </div>
        </header>
    )
    
}

export default Header