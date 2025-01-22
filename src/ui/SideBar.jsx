/* eslint-disable react/react-in-jsx-scope */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineCalendarDays,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from 'react-icons/hi2';

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  grid-row: 1/-1;
  border-right: 1px solid var(--color-grey-100);

  padding: 2rem;
  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
`;

const StyledLogo = styled.img`
  width: 10rem;
`;

const StyledNavBar = styled.nav`
  width: 100%;
  & ul {
    display: grid;
    gap: 0.4rem;
  }

  & a {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.8rem;
  }

  & .active,
  & a:hover {
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & span {
    font-size: 2rem;
    margin-right: 0.8rem;
  }

  & a:hover span,
  & .active span {
    color: var(--color-brand-700);
  }
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <NavBar />
    </StyledSideBar>
  );
}

function Logo() {
  return <StyledLogo src="logo-light.png" alt="logo" />;
}

function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <NavLink to={'/home'}>
            <span>
              <HiOutlineHome />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/bookings'}>
            <span>
              <HiOutlineCalendarDays />
            </span>
            Bookings
          </NavLink>
        </li>
        <li>
          <NavLink to="/cabins">
            <span>
              <HiOutlineHomeModern />
            </span>
            Cabins
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <span>
              <HiOutlineUsers />
            </span>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="settings">
            <span>
              <HiOutlineCog6Tooth />
            </span>
            Settings
          </NavLink>
        </li>
      </ul>
    </StyledNavBar>
  );
}

export default SideBar;
