import React from 'react'
import "./intro.css"
import coverImage from "../../assets/cover.svg"
import pdf from "../../assets/luckysingh_resume.pdf"
import Contact from '../../pages/contact/Contact'
import { Link } from 'react-router-dom'
const Intro = () => {
  const onButtonClick = () => {
    const pdfUrl = pdf;
    window.open(pdfUrl, '_blank');
};
  return (
    <div className='flex flex-x-between flex-y-center'>
        <div className='intro'>
            <h4>Frontend Developer </h4>
            <h2>Hello i'm <br/> Lucky Singh</h2>
            <p>I'm a Frontend developer With 5 Years of Experience in web development, Design, and Optimizations of the web applications.</p>
            <div className='flex flex-y-center'>
              <button className='btn'><Link to="/contact">Let's Talk</Link></button>
              <button className='btn' onClick={onButtonClick}>Download Resume</button>
            </div>
        </div>
        <div className='image-avtar'>
           <img src={coverImage} alt="coverImage" />
        </div>
    </div>
  )
}

export default Intro