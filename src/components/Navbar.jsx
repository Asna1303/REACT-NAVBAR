import React from 'react'
import { Logo } from './Logo'
import { NavLinkWrapper, NavbarWrapper } from '../styles/Navbar.styled'

export const Navbar = () => {
  const link = [
    {
      page: "Home",
      href: "/",
    },
    { page: "About", href: "/about" },
    { page: "Blog", href: "/blog" },
    {
      page: "Services",
      href: "/services",
    },
    { page: "Sign Up", href: "/sign-up" },
  ];
  return (
    <NavbarWrapper>
      <Logo/>
      <NavLinkWrapper active={active}>
        {link.map((link) => (
          <StyledNavLink
            activeclassname="active"
            key={link.page}
            to={link.href}
          >
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  )
}


