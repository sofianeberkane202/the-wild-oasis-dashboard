/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 14rem;
`;

function Logo() {
  return <StyledLogo src="logo-light.png" alt="logo" />;
}

export default Logo;
