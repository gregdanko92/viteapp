import { Link } from 'react-router-dom'
import React from 'react'
import { useEffect } from 'react';

function Resume(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <div className='about-content'>
            <div className='resume-top'>
                <div className='resume-top-left'>
                    <div className='heading-text'>Resume</div> 
                    <p>Here's a <a 
                    // target="_blank"
                    href='https://docs.google.com/document/d/e/2PACX-1vSWz9mblXoObYCN-4PfE-6MXQyprqocw3Ff3BBh_IW9pwxgVgPWeLVCGNEf1BDXerz3Hp0_csHGeN5R/pub'
                    ><b>copy of my resume</b></a> that you can download, I do try to keep it updated on a regular basis, but please reach out for the most current copy over email at gregdanko92@gmail.com </p>
                </div>
                
                <div className='resume-top-right' >
                    
                
                </div>
            </div>
    </div>

            
    )
}

export default Resume


