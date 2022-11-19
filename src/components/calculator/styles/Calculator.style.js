import styled from 'styled-components';

const CalculatorWrapper = styled.section`
  display: flex;
  & div.rdrDefinedRangesWrapper {
    display: none;
  }
  flex-direction: column;
  justify-content: center;
`;
const InputsWrapper = styled.div`
  display: flex;
  padding:  2rem 10rem;
`;
const SingleInputWrapper = styled.div`
  display: block;  
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
`;
const DatePickerWrapper = styled.div`
  display: flex;  
  
`;



export { CalculatorWrapper, InputsWrapper, SingleInputWrapper, DatePickerWrapper, CalendarWrapper, InputStyled, SelectStyled };