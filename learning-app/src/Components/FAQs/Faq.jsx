import React from "react";
import "./faq.css";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Faq = () => {
  return (
    <div id="faq" className="faq-container">
      <div className="faqTitle">
        <h2>
          <span className="line">____</span>FREQUENTLY ASKED QUESTIONS
          <span className="line">____</span>
        </h2>
      </div>
      <div className="faq-1">
        <div className="faq-1Q">
          <span className="qicon">
            <HelpOutlineOutlinedIcon />
          </span>
          What are prerequisites for the course?
        </div>
        <div className="faq-1A">
          <p>
            - A laptop with Internet connection
            <br />
            - Basic Knowledge of VS Code
            <br />
            - Hunger for Learning
            <br />- Ready for a grind
          </p>
        </div>
      </div>
      <hr />
      <div className="faq-1">
        <div className="faq-1Q">
          <span className="qicon">
            <HelpOutlineOutlinedIcon />
          </span>
          What language will the course be taught in?
        </div>
        <div className="faq-1A">
          <p>Everything will be taught in English</p>
        </div>
      </div>
      <hr />
      <div className="faq-1">
        <div className="faq-1Q">
          <span className="qicon">
            <HelpOutlineOutlinedIcon />
          </span>
          Will there be any job guarantee after this Live course?
        </div>
        <div className="faq-1A">
          <p>
            NO, this is<b> NOT a Job-guarantee program</b>. (No false promises).
            But we are sure, that if you finish watching these episodes and
            assignments on time, you will be so good in React that interview
            questions will be a piece of cake for you.
          </p>
        </div>
      </div>
      <hr />
      <div className="faq-1">
        <div className="faq-1Q">
          <span className="qicon">
            <HelpOutlineOutlinedIcon />
          </span>
          I have more questions, how can I reach out to you?
        </div>
        <div className="faq-1A">
          <p>
            Drop us a mail at <b>support-edteach@gmail.com</b>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Faq;
