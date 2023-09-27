import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledOverlay>
      <StyledForm action="https://formspree.io/f/mzbygdjk" method="post">
        <h1>Contact</h1>
        <StyledInputs>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea
            name="textarea"
            cols="40"
            rows="10"
            required
            placeholder="What's the Beef?"
          />
          <StyledButton type="submit" value="submit">
            Submit
          </StyledButton>
        </StyledInputs>
      </StyledForm>
    </StyledOverlay>
  );
};

export default Form;

const StyledOverlay = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  transition: 0.5s;
  padding: 10% 0 10%;
  background-color: rgba(248, 242, 242, 0.747);
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StyledForm = styled.form`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-style: none;
  background-color: #414a6b;

  @media (max-width: 600px) {
    width: 80%;
  }

  & textarea {
    background-color: #f1f1f1;
    font-family: "Oswald", sans-serif;
    color: #414a6b;
    font-size: 16px;
  }
`;

const StyledInputs = styled.div`
  height: 300px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 20px;

  & input {
    width: 80%;
    font-size: 25px;
    transition: 0.3s;
    text-decoration: none;
    color: black;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  color: #414a6b;
  height: 69%;
  width: 28%;

  &:hover {
    background-color: #414a6b;
    color: #f1f1f1;
  }

  &:active {
  background-color: #f1f1f1;
  color: #414a6b;
`;

// .formSubmit {
//   width: 50%;
//   background-color: #f1f1f1;
//   margin-top: 10px;
//   outline: none;
//   font-family: "Oswald", sans-serif;
// }

// .overlayFormContent a:hover,
// .overlay a:focus {
//   color: #f1f1f1;
// }
// .overlayFormContent .closebtn-contact {
//   position: absolute;
//   top: 20px;
//   right: 45px;
//   font-size: 60px;
// }
