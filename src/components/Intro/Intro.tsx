import styled from "styled-components";

const Introduction = () => {
  return (
    <StyledSection>
      <StyledLeftBox>
        <StyledIntroParagraph>
          Raul Davila
          <br />
          Frontend Developer:
          <br />
          <br />
          As a Frontend Developer I make it my priority to implement visual and
          interactive elements to increase user engagement when working with web
          application. Currently, I am looking for a position that will allow me
          to put my skills into practice while helping your company reach new
        </StyledIntroParagraph>
      </StyledLeftBox>

      <StyledRightBox>
        <StyledGreeting>
          WEL
          <br />
          COME.
        </StyledGreeting>
      </StyledRightBox>
    </StyledSection>
  );
};

export default Introduction;

const StyledSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin-top: 50px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledLeftBox = styled.div`
  background-color: #414a6b;
  height: 92vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    order: 2;
    font-size: max(5vw, 10px);
  }
`;

const StyledRightBox = styled.div`
  background-color: #f8f8f8;
  height: 92vh;
  width: 50%;
  font-size: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    font-size: max(5vw, 50px);
  }
`;

const StyledIntroParagraph = styled.p`
  text-align: center;
  font-size: 20px;
  color: #f8f8f8;
  padding-right: 10%;
  padding-left: 10%;
`;

const StyledGreeting = styled.h1`
  background-color: transparent;
`;
