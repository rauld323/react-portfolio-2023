import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledAnchorText href="#Intro">Raul Davila Campos</StyledAnchorText>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 50px;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: white;
`;

const StyledAnchorText = styled.a`
  float: left;
  color: black;
  padding: 0px 16px;
  text-decoration: none;
`;
