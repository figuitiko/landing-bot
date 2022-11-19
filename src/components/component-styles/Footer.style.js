import styled from 'styled-components';
import palette from './../../theming/palette';

const FooterWrapper = styled.footer`
  grid-row: 3;
  background-color: ${palette.footerColor};   
`
const FooterFrame = styled.div`
  display: flex;
  padding: 2rem 10rem;  
  @media (max-width: 600px) {
    padding: 2rem 2rem;
    flex-direction: column;
  }
  max-width: 1200px;
  margin: 0 auto;
  
`
const FooterLogo = styled.div`
  &> picture {    
    &> img {
      max-width: 200px;
    }
  }
  width: 33%;
  @media (max-width: 600px) {
    width: 100%;
  }
  display: flex;
  justify-content: center;
`
const FooterContent = styled.div`
  
  & > ul {
    list-style: none;
    & > li {
      & > a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }  
  width: 33%;
  @media (max-width: 600px) {
    width: 100%;
  }
  display: flex;
  justify-content: center;
`;
const FooterMiddle = styled.div`
  display: flex;
  width: 33%;
  @media (max-width: 600px) {
    width: 100%;
  }
  justify-content: center;
  & > ul {
    list-style: none;
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
const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  & >p{
    color: ${palette.fontAnchor};
  }
`;

export { FooterWrapper, FooterLogo, FooterContent, FooterFrame, FooterRight, FooterMiddle };