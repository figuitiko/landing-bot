import styled from 'styled-components';
import palette from './../../theming/palette';

const InfoBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${props=>props.bgBox ? palette[props.bgBox] : palette.tertiary};  
  padding: 2rem 0;
  width: 25%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export { InfoBoxWrapper };