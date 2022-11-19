import styled from 'styled-components';
import banner from './../../assets/img/bg-bot.gif';

const MainWrapper = styled.div`
  grid-row: 2;
`;
const FirstMain = styled.section`
  width: 100vw;
  height: 100vh;
  background: url(${banner}) no-repeat center center;
  background-size: cover;
  background-size: 100% 100vh;

`;
const SecondMain = styled.section`  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;



export { MainWrapper,FirstMain, SecondMain };