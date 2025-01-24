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
  padding: 4rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  max-width: 1200px;
  width: 100%;
  margin-inline: auto;

  overflow-y: auto;
`;

const StyledAppLayout = styled.div`
  background-color: var(--color-grey-50);
  height: 100%;
  display: grid;
  grid-template-columns: 24rem 1fr;
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
