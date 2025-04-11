import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  onAuthStateChanged 
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import "../styles/Homepage.css";
import leftPhoto from "../assets/websiteLogo2.jpg";

function Homepage() {
  const navigate = useNavigate();
  const location = useLocation();
  const person = location.state || null; // Ensure that location.state is not null/undefined
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log("No user found, redirecting to login");
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);
  if (!person) {
    return null; // This avoids rendering anything before navigation happens
  }// Include `person` in dependencies
  console.log(person.id);
  console.log(person.name);

  


  return (
    <div className="homepage">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use href="#bootstrap"></use>
          </svg>
          <span className="fs-4">
            <span id="webtitle" style={styles.heading}>
              The Chosen
            </span>
          </span>
        </a>

        <ul className="nav-bar">
          <li className="nav-items">
            <a href="/" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
          </li>
          {/* <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li> */}
          <li className="nav-items">
            <a href="/profile" className="nav-link">
            <div id="profile" >{person.name[0].toUpperCase()}</div>
            </a>
          </li>
        </ul>
      </header>
      <div className="container">
        <div className="layout">
          <div class="content">
            <div className="segement">
              <img
                src={leftPhoto}
                alt="left photo"
                height="300px"
                width="300px"
              />
            </div>
            <button type="button" class="customb">
              Vote
            </button>
          </div>
          <div class="content">
            <div className="segement">
              <img
                src={leftPhoto}
                alt="left photo"
                height="300px"
                width="300px"
              />
            </div>
            <button type="button" class="customb">
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heading: {
    color: "white",
    font: "Pinyon Script",
  },
};

export default Homepage;
