import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Side>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>

          <SmallMenu>
            <UnstyledButton>
              <Icon id="shopping-bag" />
              <VisuallyHidden>Open Cart</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" />
              <VisuallyHidden>Search</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="menu" onClick={() => setShowMobileMenu(true)} />
              <VisuallyHidden>Open Menu</VisuallyHidden>
            </UnstyledButton>
          </SmallMenu>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 9px 16px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${QUERIES.phoneAndUp} {
    padding: 18px 32px;
  }
`;

const Nav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
    margin: 0px 48px;
  }
`;

const SmallMenu = styled.div`
  display: flex;
  gap: 0.5rem;
  width: min-content;
  margin-left: auto;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
