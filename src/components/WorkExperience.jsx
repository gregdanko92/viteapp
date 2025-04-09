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
      <div className='heading-text-work-exp'>
        <>Engineering Experience</>
        <div className='resume-links-container'>
          <a  className='resume-link' href="/gregdanko_resume.pdf" target="_blank" rel="noopener noreferrer">
             Resume
          </a>
          
        </div>

      </div>

      <div className="one-job">
        <div className='job-block-header'>
          <div className='sub-heading'>Full Stack Software Engineer, CurieAI, Santa Clara, CA</div> <div className='sub-heading'>01/2022-Present</div>
        </div>
        <div className='job-description'>
          <p>Led our engineering effort to create a continuous symptom monitoring application for patients experiening respiratory malady in order to track their progress clinically.</p>
          <div className='relevant-skills'> {getSkillFormatting(['Kotlin', 'Android SDK', 'Jetpack Compose', 'Gradle', 'MongoDB', 'Firebase', 'Tensorflow'])} </div>

          <p>Led our engineering effort to create and launch a modular SMS microservice to be used by our clinicians to communicate with patients, as well as allowing for patients to confirm or reschedule their appointments via text message
          </p>
          <div className='relevant-skills'>{getSkillFormatting(['Javascript', 'Node.js', 'MongoDB', 'Twilio', 'Kafka', 'Elasticsearch', 'AWS', 'Athena EHR'])}</div>

            <p>Designed and implemented various features including video-calling, notifications, messaging, as well as the development of a pulmonary test feature using an external bluetooth spirometry deviceto be used on our clinician-focused web application and patient-focused mobile application.
            </p>
            <div className='relevant-skills'>{getSkillFormatting(['Javascript', 'React', 'React-Native', 'Redux', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'AWS'])}</div>

          <p>Spearheaded a project where I adapted our existing video call infrastructure to allow for the flow of data from the patient's bluetooth spirometry device to our patient's tablet, as well as our clinician's desktop web application.
          </p>
          <div className='relevant-skills'>{getSkillFormatting(['Javascript', 
              'React', 'React-Native', 'Node.js', 'MongoDB', 'HTML', 'CSS'])}</div>


        </div>
      </div>

      <div className="one-job">
        <div className='job-block-header'>
          <div className='sub-heading'>Sr. Research Associate, Nura Bio, South San Francisco, CA</div> <div className='sub-heading'>09/2018-07/2021</div>
        </div>
        <div className='job-description'>
          <p>Built programs to increase the speed of data processing and analysis in support of drug discovery efforts. These efforts have saved multiple scientists hours of time that would have been spent manipulating data within excel, while eliminating all points of possible human error. .</p>

          <div className='relevant-skills'>{getSkillFormatting(['Python', 'NumPy', 'Pandas', 'Redux', 'Seaborn'])}</div>


          <p>Developed image analysis algorithms to extract data from fluorescence microscopy datasets. Utilized <strong>Python</strong>,<strong>ImageJ</strong>, <strong>OpenCV</strong>, and <strong>CellProfiler</strong>.</p>
          <div className='relevant-skills'>{getSkillFormatting(['Python', 'ImageJ', 'OpenCV', 'CellProfiler'])}</div>


          <p>Leveraged automation in the pursuit of consistency and efficiency in cell cultures and cell-based assays using the ZEISS CD7 microscope, Incucyte S3, and Agilent Bravo Liquid Handler whenever relevant.</p>
          <p>Collaborated across teams regularly in support of drug discovery efforts.</p>
          <p>Aided in the design and positioning of the company's digital presence.</p>
          <p>Regularly presented data in team meetings as well as in company-wide discussions.</p>
          <p>Co-authored the following <a href="https://www.sciencedirect.com/science/article/pii/S2211124720309840">publication</a>.</p>
        </div>

      </div>

      

      <div className='education-section'>
        <div className='heading-text'>
          <>Education</>
        </div>
        <div className='job-description'>

          <div className='education-line'>
            <div>Software Engineering Immersive Fellow, General Assembly</div> <div>09/2021</div>
          </div>
          <div className='education-line'>
            <div>Master of Science, Anatomical and Translational Sciences, George Washington University</div> <div>06/2016</div>
          </div>
          <div className='education-line'>
            <div>Bachelor of Science, Neuroscience, University of Pittsburgh</div> <div>08/2014</div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default WorkExperience