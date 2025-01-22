/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';

const Header = styled.nav`
  background-color: var(--color-grey-0);
  border-block-end: 1px solid var(--color-grey-100);
  padding: 0.8rem 0.4rem;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
`;

const StyledAppLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: auto 1fr;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header>Header</Header>
      <Main>
        <Outlet />
      </Main>
      <SideBar />
    </StyledAppLayout>
  );
}

export default AppLayout;
