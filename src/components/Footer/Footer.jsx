import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";

const Footer = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <StyledFooter id="form">
      <h1>
        LETS GET IN CONTACT <em>!</em>
      </h1>
      <StyledButtonSection>
        <button onClick={handleClick}>Cool</button>
        {isOpen && <Form />}
      </StyledButtonSection>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  height: 100px;
  background-color: #414a6b;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;

  & h1 {
    color: white;
  }
`;

const StyledButtonSection = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 25px;
  background-color: white;
  color: #414a6b;
  outline: none;
  justify-content: center;
`;
