import styled from 'styled-components';
import palette from './theming/palette';


const AppWrapper = styled.div`
  background-color: ${palette.primary};
  color: ${palette.fontColor};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 2fr 200px;
  & a{
    color: ${palette.fontAnchor};
  }
`;

export { AppWrapper };