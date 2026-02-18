import React from "react";
import aboutImage from "../assets/a-i-1.jpg";
import "./about.css";
function About() {
  return (
    <section className="about-section container">
      <img src={aboutImage} alt="About Us" />
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          We are a leading fashion retailer, committed to providing the latest
          trends and styles to our customers. Our mission is to empower
          individuals through fashion, helping them express their unique
          personalities and feel confident in their own skin.
        </p>
        <p>
          With a diverse range of products and a focus on quality, we strive to
          create a seamless shopping experience for our customers. Thank you for
          choosing us as your go-to destination for all things fashion!
        </p>
      </div>
    </section>
  );
}

export default About;
