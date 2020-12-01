import styled from 'styled-components';
import tokens from '../../../styles/tokens';

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid ${tokens.black};
  border-radius: 4px;
`;

const Text = styled.p`
  margin-right: 12px;
`;

export { Item, Text };
