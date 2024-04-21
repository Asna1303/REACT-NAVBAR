import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: white;
  margin-left: 2rem;
  &:last-child {
    background: #007dfc;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    &:hover {
      color: white;
    }
    &.${(props) => props.activeclassname} {
      color: white;
    }
  }

  &.${(props) => props.activeclassname} {
    color: #007dfc;
  }

  &:hover {
    color: #007dfc;
  }

  @media (max-width: 704px) {
    display: block;
    margin: 2rem auto;
  }
`;

export { LogoImg,
  NavbarWrapper,
  NavLinkWrapper,
  StyledNavLink};