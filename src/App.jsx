import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome'
import About from './components/About'
import WorkExperience from './components/WorkExperience';
import Resume from './components/Resume';
import PdfResume from './components/PdfResume';
import Contact from './components/Contact'
import Secret from './components/Secret'



import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
      <Router>
        <div className='page-container'>
          <Header />
            <Routes>
              <Route path='/' element={<Welcome />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/work_experience' element={<WorkExperience />}></Route>
              <Route path='/resume' element={<Resume />}></Route>
              <Route path='/pdf_resume' element={<PdfResume />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/secret' element={<Secret />}></Route>
            </Routes>
          <Footer />
        </div>
      </Router>
  )
}

export default App





