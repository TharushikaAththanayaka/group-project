import React from "react";
import Navbar from "../components/Navbar";
import Background from "../assests/background.png";
import "./Homepage.css"
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="homepage-content">
        <img src={Background} alt="Background" />
        <div className="text">
          <span>Welcome to</span>
          <h1>Complaint Management System</h1>
        </div>
        <div className="buttons">
          <button>Admin</button>
          <button>User</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
