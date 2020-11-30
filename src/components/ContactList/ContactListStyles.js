import styled from 'styled-components';
import ListStyled from '../../styles/ListStyles';

const List = styled(ListStyled)`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 24px;
`;

export default List;
