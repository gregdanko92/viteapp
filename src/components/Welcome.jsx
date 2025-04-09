import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function Welcome() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className='about-content'>
                <div className='heading-text'>Hey there, I'm Greg</div>
                <p>I am a full stack engineer based in Los Angeles, California</p>
                <p>I'm an east coast transplant living in Los Angeles working as a <strong>full stack engineer</strong>, although I've worked a fair share of other jobs, such as an organic chemistry tutor, chicken fryer, bartender, and most recently as a bench scientist in drug development. Strange as it sounds, this motley of experience prepared me for a career as a software engineer as I have developed meticulous eye for detail, a strong work ethic, and most importantly, mental fortitude to push through an onslaught of failures.</p>
                <p>Feel free to check out my detailed <Link to="/work_experience">work experience</Link> or <Link to='/contact'>connect</Link> with me directly!</p>

        </div>
    )
}

export default Welcome