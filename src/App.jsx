/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout';
import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
