import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo... Saya <span className="purple">Bayu Aji </span>
            dari <span className="purple"> Gresik, Jawa Timur.</span>
            <br />Saya seorang Junior Web Developer. Selain Web Developer saya juga Seorang Editor Gambar dan Video .
            <br />
            <br />
            
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's Do It"{" "}
          </p>
          <footer className="blockquote-footer">Ajie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
