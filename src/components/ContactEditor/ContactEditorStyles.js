import styled from 'styled-components';
import tokens from '../../styles/tokens';
import Button from '../Button';

const LH = '16px';

const Editor = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${tokens.black};
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: ${LH};
  letter-spacing: 0.01em;
  margin-bottom: 12px;
`;

const EditorButton = styled(Button)`
  width: 100%;
`;

export { Editor, EditorButton, Input };
