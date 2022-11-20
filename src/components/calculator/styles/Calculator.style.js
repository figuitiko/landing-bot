import styled from 'styled-components';
import palette from '../../../theming/palette';

const CalculatorWrapper = styled.section`
  display: flex;
  & div.rdrDefinedRangesWrapper {
    display: none;
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2{
    color: ${palette.fontAnchor};
  }
  & p{
   max-width: 600px;
  text-align: center;
  }
`;
const InputsWrapper = styled.div`
  display: flex;
  padding:  2rem 10rem;
  gap: 2rem;
`;
const SingleInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const InputStyled = styled.input`
      appearance: none;
      -webkit-appearance: none;
      border: none;
      background-color: transparent;
      outline: none;
      padding: $ruler;
      display: block;
      box-sizing: border-box;
`;
const SelectStyled = styled.select`
    
`;
const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;  
  flex-direction: column;
  align-items: center;
`;
const DatePickerWrapper = styled.div`
  display: flex;    
`;

const LegendWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
const LegendItem = styled.div`
  display: flex;
  gap: 1rem;
  `;
  const LegendIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${props => props.color === 'pre' ? 'yellow' : props.color === 'post' ? 'orange' : props.color === 'period' ? 'red' : 'green'};
  

`;
const LegendText = styled.span`

`;

const ButtonRetake = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 1rem 2rem;
  border-radius: 6px;
  background-color: #287be0;
  color: #fff;
  cursor: pointer;

`;



export { CalculatorWrapper, 
      InputsWrapper, 
      SingleInputWrapper, 
      DatePickerWrapper, 
      CalendarWrapper, 
      InputStyled, 
      SelectStyled, 
      ButtonRetake,
      LegendWrapper,
      LegendItem,
      LegendIcon,
      LegendText,
    };