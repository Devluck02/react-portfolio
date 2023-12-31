import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import pdffile from "../documents/luckysingh(CV).pdf"
const Hero = () => {
  
  return (
    <div className="container hero-wrapper py-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="text-black">👋 Hello Everyone</h1>
          <h2 className="text-black mb-3">
            my name is Lucky singh and I'm full time Front End/UI Developer from India
          </h2>
          
          <div className="btn-wrapper">
            <Link to="/Contact" className="text-white">
              <Buttons btnTxt="connect with me" />
            </Link>
            <a
              className="btn btn-outline-dark btn-custom ms-3"
              href={pdffile}
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
