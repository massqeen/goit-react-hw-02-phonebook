import styled from 'styled-components';
import ButtonBasic from 'styles/ButtonBasicStyles';
import tokens from 'styles/tokens';

const Button = styled(ButtonBasic)`
  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: ${tokens.indigo};
  color: ${tokens.white};
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: ${tokens.indigoAccent};
  }

  &:active {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export default Button;
