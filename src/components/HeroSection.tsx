import React from "react";
import Button from "./Button";
import "./hero.css";

interface Props {
  title?: string;
}

function HeroSection(props: Props) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="hero-container">
        <video src="/video-2.mp4" autoPlay loop muted></video>
        <h1 className="hero-heading">
          {props.title ? props.title : "Journey Awaits"}
        </h1>
        <div className="btn-container">
          <p className="paragraph">What are You Waiting For?</p>
          <Button
            type="link"
            buttonSpace="btn-lg"
            buttonStyle="btn-outline-light"
          >
            Now!!
          </Button>
          <Button
            type="link"
            className="hero-btn"
            buttonSpace="btn-lg"
            buttonStyle="btn-light"
          >
            Get in touch!
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
