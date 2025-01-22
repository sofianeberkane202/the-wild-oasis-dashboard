/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = styled.aside`
  background-color: red;
  grid-row: 1/-1;
`;

const NavBar = styled.nav`
  background-color: blue;
`;

const Main = styled.main`
  background-color: orange;
`;

const StyledAppLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar>NavBar</NavBar>
      <Main>
        <Outlet />
      </Main>
      <SideBar>SideBar</SideBar>
    </StyledAppLayout>
  );
}

export default AppLayout;
