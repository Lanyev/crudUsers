import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>Todos los derechos reservados &copy; {new Date().getFullYear()}</li>
        <li>
          Desarrollado por:{" "}
          <a
            href="
https://www.linkedin.com/in/alan-yeverino-1b160754/"
            target="_blank"
            rel="noreferrer"
          >
            Alan Yeverino
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
