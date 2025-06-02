import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: white;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <div className="mt-3 mx-auto text-center">
        <span>
          If you like PythonSinhala, don't forget to give us a star on{" "}
        </span>
        <a
          href="https://github.com/OpenArchitex/PythonSinhala"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        !
        <p>
          <small>
            Powered by{" "}
            <a
              href="https://github.com/OpenArchitex"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenArchitex
            </a>
            &copy;<span>{year}</span>. Code licensed under an{" "}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            .
          </small>
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
