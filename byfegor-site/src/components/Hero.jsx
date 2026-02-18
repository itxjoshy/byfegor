import React from "react";
import logo from "../assets/logo.png";
import "./hero.css";
function Hero() {
  return (
    <main class="hero-section">
      <div class="tag">
        <p>World wide shipping with DHL🌎</p>
      </div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">catalouge</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </nav>
        <div class="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div class="buttons">
          <button class="search">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram"
              width="24"
            />
          </button>
        </div>
      </header>
      <div class="hero-section-content">
        <h1>the contour collection</h1>
        <p>shop now for the latest in contour fashion.</p>
        <button>shop now</button>
      </div>
    </main>
  );
}

export default Hero;
