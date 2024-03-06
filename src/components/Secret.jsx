import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function Secret(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 

    return(
        <div className='about-content'>
            <div className='heading-text'>Secret Page</div>
            Welcome to the secret page, I'm still figuring out what to do with this thing...
        </div>
    )
}

export default Secret