import PropTypes from 'prop-types';
import ContainerStyled from './ContainerStyles';

const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
