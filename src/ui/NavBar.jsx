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

const StyledNavBar = styled.nav`
  width: 100%;
  & ul {
    display: grid;
    gap: 0.8rem;
  }

  & a {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.8rem 2rem;
  }

  & .active,
  & a:hover {
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & span {
    font-size: 2.5rem;
    margin-right: 1rem;
  }

  & a:hover span,
  & .active span {
    color: var(--color-brand-700);
  }
`;

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

export default NavBar;
