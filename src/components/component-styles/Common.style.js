import styled from 'styled-components';
import palette from '../../theming/palette';


const ContainerMedium = styled.div`
  padding: 0 10rem;
  @media (max-width: 600px) {
    padding: 0 2rem;
  }
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;  
  color: ${palette.fontAnchor};
`;


export { ContainerMedium };