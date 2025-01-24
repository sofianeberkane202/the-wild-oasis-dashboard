import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,

  secondary: css`
    color: var(--color-grey-600);
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,

  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: all 0.5s;

  &:focus {
    outline: none;
  }
  ${(props) => sizes[props.size]}

  ${(props) => variations[props.variation]}
`;

export default Button;
