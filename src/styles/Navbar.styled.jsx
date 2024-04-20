import styled from "styled-components";
const LogoImg = styled.img`
  align-self: start;
  width: 150px;
`;
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  padding: 1rem 3rem;
  position: relative;
  @media (max-width: 704px) {
    flex-direction: column;
    padding: 1rem;
  }
`;
const NavLinkWrapper = styled.div`
  @media (max-width: 704px) {
    display: ${(props) => (props.active ? "block" : "none")};
    text-align: center;
    padding: 2rem 0;
  }
`;

export { LogoImg};