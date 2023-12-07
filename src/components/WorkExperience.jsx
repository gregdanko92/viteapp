import React from 'react'
import { useEffect } from 'react';

function WorkExperience() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getSkillFormatting = (skills) => {
    let skillString = skills.map(skill => {
      if (skill === skills[skills.length - 1]) {
        return <>
          &nbsp;and <strong>{skill}</strong>
        </>
      } else {
        return <>
          &nbsp;<strong>{skill}</strong>,
        </>
      }
    })
    console.log(skillString)
    return skillString
  }

  return (
    <div className='about-content'>
      <div className='heading-text'>
        <>Professional Experience</>
      </div>

      <div className="one-job">
        <div className='job-block-header'>
          <div className='sub-heading'>Full Stack Software Engineer, CurieAI, Santa Clara, CA</div> <div className='sub-heading'>01/2022-Present</div>
        </div>
        <div className='job-description'>
          <p>Designed and implemented various features including video-calling, notifications, and messaging used by our clinician-focused web application using {getSkillFormatting(['TypeScript/JavaScript', 'React', 'Redux', 'WebGL', 'Node.js', 'MongoDB', 'HTML', 'CSS'])} </p>
          <p>Designed and implemented various features including video-calling, notifications, and messaging to our patient-focused mobile applications using {getSkillFormatting(['TypeScript/JavaScript', 'React-Native', 'WebGL', 'Android Studio', 'Gradle', ' Node.js', 'MongoDB', 'HTML', 'CSS'])} </p>
          <p>Designed and implemented multiple RESTful API services in support of both our patient-focused mobile applications, as well as our clinician-focused browser applications.</p>
          <p>Developed a tool for regulatory bodies such as the FDA, as well as prospective clients to validate the AI behind our app using {getSkillFormatting(['TypeScript/JavaScript', 'React', 'Redux', 'Node.js', 'MongoDB', 'HTML', 'CSS'])}  </p>
          <p>Participated in product design discussions, collaborating with clinical user base in order to translate product feedback into platform changes.</p>
        </div>
      </div>

      <div className="one-job">
        <div className='job-block-header'>
          <div className='sub-heading'>Sr. Research Associate, Nura Bio, South San Francisco, CA</div> <div className='sub-heading'>09/2018-07/2021</div>
        </div>
        <div className='job-description'>
          <p>Built computer programs to increase the speed of data processing and analysis in support of drug discovery efforts. These efforts have saved multiple scientists hours of time that would have been spent manipulating data within excel, while eliminating all points of possible human error. These programs were developed using <strong>Python</strong> , <strong> NumPy</strong>, <strong> Pandas</strong>, and <strong>Seaborn</strong>.</p>
          <p>Developed image analysis algorithms to extract data from fluorescence microscopy datasets. Utilized <strong>Python</strong>,<strong>ImageJ</strong>, <strong>OpenCV</strong>, and <strong>CellProfiler</strong>.</p>
          <p>Leveraged automation in the pursuit of consistency and efficiency in cell cultures and cell-based assays using the ZEISS CD7 microscope, Incucyte S3, and Agilent Bravo Liquid Handler whenever relevant.</p>
          <p>Collaborated across teams regularly in support of drug discovery efforts.</p>
          <p>Aided in the design and positioning of the company's digital presence.</p>
          <p>Regularly presented data in team meetings as well as in company-wide discussions.</p>
          <p>Co-authored the following <a href="https://www.sciencedirect.com/science/article/pii/S2211124720309840">publication</a>.</p>
        </div>

      </div>

      <div className="one-job">
        <div className='job-block-header'>
          <div className='sub-heading'>Lab Technician, Georgetown University, Washington, DC</div> <div className='sub-heading'>08/2017-08/2018</div>
        </div>
        <div className='job-description'>
          <p>
            Spearheaded a developmental toxicity study characterizing the effects of the anticonvulsants levetiracetam and phenobarbital on the rat brain. Neonatal exposure was characterized through the behavioral, histological, and molecular outcomes.</p>
          <p>
            Managed all animal specimens and laboratory supply ordering for the Forcelli lab, ensuring that experiments were able to run on a regular schedule without any unnecessary delay, allowing experimentation to proceed uninhibited.
          </p>
          <p>
            Neurobehavioral testing, immunohistochemistry, degenerative silver staining, stereotaxic surgery, drug dosing, laboratory management, accurate note keeping, data analysis (Microsoft Excel, GraphPad Prism).
          </p>
          <p>Co-authored the following <a href="https://pubmed.ncbi.nlm.nih.gov/30261353/">publication</a></p>

        </div>
      </div>

      <div className="one-job">
        <div className='job-block-header'>
          <div className='sub-heading'>Lab Technician, George Washington University, Washington, DC</div> <div className='sub-heading'>11/2014-08/2016</div>
        </div>
        <div className='job-description'>
        <p>Performed chicken brain dissections on live tissue for use in ex vivo electrophysiology and immunohistochemistry </p>
        <p>Optimized a protocol for chicken brain dissections for use in ex vivo electrophysiology </p>
        <p>Built and optimized an ex vivo electrophysiology system for use by all laboratory members, reliably fixed the system when errors occurred to ensure experiment timelines went unimpeded.</p>
        <p> Analyzed data from aforementioned experimental methods, and designed experiments to follow up on findings, in the pursuit of characterizing the tangential nucleus of the chicken midbrain.</p>
      </div>
      </div>

      <div className='education-section'>
        <div className='heading-text'>
          <>Education</>
        </div>
        <div className='job-description'>

        <div className='education-line'>
          <p>Software Engineering Immersive Fellow, General Assembly</p> <p>09/2021</p>
        </div>
        <div className='education-line'>
        <p>Master of Science, Anatomical and Translational Sciences, George Washington University</p> <p>06/2016</p>
        </div>
        <div className='education-line'>
        <p>Bachelor of Science, Neuroscience, University of Pittsburgh</p> <p>08/2014</p>
        </div>
        </div>
      </div>




    </div>
  )
}

export default WorkExperience