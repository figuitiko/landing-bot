import styled from 'styled-components';
import inpiBg from './../../assets/img/inpi-bg.png';

const HeaderWrapper = styled.div`
  grid-row: 1;
  background: url(${inpiBg}) no-repeat center center fixed;
  background-size: cover;
`;
const LogoBox = styled.div`
  display: flex;
  max-width: 5rem;  
  &> picture {    
    &> img {
      max-width: 200px;
    }
  }
`;
const NavBox = styled.div`
  display: flex;
  margin-left: auto;
  & > ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    & > li {
      & > a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export { HeaderWrapper, LogoBox, NavBox };