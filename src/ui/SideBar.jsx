/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  grid-row: 1/-1;
  border-right: 1px solid var(--color-grey-100);

  padding: 4rem 2rem;
  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <NavBar />
    </StyledSideBar>
  );
}

export default SideBar;
