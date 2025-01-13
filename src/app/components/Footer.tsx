import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faWhatsapp,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0C4C45",
        color: "white",
        padding: "20px 150px",
        textAlign: "left",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Title Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          AGRO AI
        </h2>
        <div
          style={{
            width: "80px",
            height: "2px",
            backgroundColor: "white",
            margin: "8px auto",
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* Reach Us Section */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Reach us</h4>
          <p style={{ margin: "5px 0" }}>
            <strong>📞</strong> +94 76 070 1732
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>✉️</strong> agroai@gmail.com
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>📍</strong> No.03, Weliva, Morawaka,
            <br />
            Southern Province, Sri Lanka
            <br />
            Z.C.- 81470
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Company</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>About</li>
            <li>Contact</li>
            <li>Our Solutions</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Legal</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Privacy Policy</li>
            <li>Terms & Services</li>
            <li>Terms of Use</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Quick Links</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Eco Bin</li>
            <li>Downloads</li>
            <li>Forum</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Join With Our Social Media</h4>
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <a href="#" style={{ color: "white", fontSize: "20px" }}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" style={{ color: "white", fontSize: "20px" }}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="#" style={{ color: "white", fontSize: "20px" }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" style={{ color: "white", fontSize: "20px" }}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" style={{ color: "white", fontSize: "20px" }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" style={{ color: "white", fontSize: "20px" }}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
