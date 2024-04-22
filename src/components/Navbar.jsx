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
      <NavLinkWrapper>

      </NavLinkWrapper>
    </NavbarWrapper>
  )
}


