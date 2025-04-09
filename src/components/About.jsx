import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function About(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 

    return(
        <div className='about-content'>
            <div className='heading-text'>About Me</div>
            <p>I'm ffan east coast transplant living in Los Angeles working as a full stack engineer, although I've worked a fair share of other jobs, such as an organic chemistry tutor, chicken fryer, bartender, and most recently as a bench scientist in drug development. Strange as it sounds, this motley of experience prepared me for a career as a software engineer as I have developed meticulous eye for detail, a strong work ethic, and most importantly, mental fortitude to push through an onslaught of failures.
            </p>

            <div className='sub-heading'>My Background</div>
            <p>In 2014, I graduated with my Bachelor of Science in neuroscience from the University of Pittsburgh, and followed it up with a Master of Science in Anatomical and Translational Sciences from George Washington University in 2016. Fully intending on a career in neuroscience research, I moved to California to work in drug development after working in neuroscience and pharmacology labs at both George Washington University and Georgetown University. </p>
            <p>Working at Nura Bio from 2018-2021, I learned a lot about the drug development industry, as well as those services that run in parallel with drug development. I came to a personal conclusion that my eye for innovation lies tangential to the pursuit of science, namely in software. Working at the bench exposed me to inefficiences in research that are only evident in the industrial setting, and that these issues could be abated with the proper software solutions. </p>
            <p>I began to automate some internal data processing tasks that otherwise occupied scientists on our team, and this led to my burgoening interest in programming. Armed with only as much as Google and Stack Overflow could take me, I decided to enroll in General Assembly's Software Engineering Immersive program to gain a more thorough understanding of full stack application development</p>
            <p> Since wrapping up the bootcamp, I have taken a position at CurieAI, working as a full stack software engineer. Here I've been able to work on multiple apps targeting both clinicans and thier respective patients. This work has given me exposure to new kinds of database technology, performance monitoring, as well as mobile development, while also working with countless new libraries and frameworks, allowing me to build some pretty cool stuff!</p>
            <p>Feel free to check out
                 my <Link to='/resume'>resume</Link>, or <Link to='/contact'>connect</Link> with me directly!</p>
        
        </div>
    )
}

export default About