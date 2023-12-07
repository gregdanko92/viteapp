import React from 'react'
import { useEffect } from 'react';

function Contact(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className='about-content'>
            <h2>Contact</h2>
            <p>Email me at&nbsp; 
            <a href="mailto:gregdanko92@gmail.com">gregdanko92@gmail.com</a>
            </p>
            <p>Or check out my <a href="https://www.linkedin.com/in/greg-danko-036514b7">LinkedIn</a> profile</p>
            <p>Or check out my <a href="https://github.com/gregdanko92">github</a> page</p>
        </div>
    )
}

 export default Contact