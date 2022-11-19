import React, { useState } from 'react'
import { CalculatorWrapper, CalendarWrapper, DatePickerWrapper, InputsWrapper, SelectStyled, SingleInputWrapper } from './styles/Calculator.style'
import { Calendar ,DateRangePicker  } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import useCalculator from './useCalculator';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const CalculatorComponent = () => {
  const [value, setValue] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);

  const {allValues, calculateMenstrualCycle} = useCalculator();

  
   
  //  console.log(value);
  //pass multiples dates ranges to the calendar
  const handleSelect = (val) => {
    
    
    calculateMenstrualCycle(val.toDateString(), 21, 3);
    
    setValue(val)
  }
 
  const handleSelectDate = (ranges) => {
    console.log(ranges)
    
  } 
  
  
  return (
    <CalculatorWrapper>
      <CalendarWrapper>
        <InputsWrapper>
          <SingleInputWrapper>
            {
              options && options.length &&
              <Select>
                value={selectedOption}
                options={options}
                onChange={setSelectedOption}
              </Select>
            }
          </SingleInputWrapper>
        </InputsWrapper>
        <Calendar
          date={value}
          onChange={handleSelect}
        />
        {
        (
          allValues && allValues.length
        ) ?
          <DateRangePicker ranges={allValues}

            showDateDisplay={false}
            dragSelectionEnabled={false}
            showMonthAndYearPickers={false}
            showSelectionPreview={false}
            showPreview={false}
            onChange={handleSelectDate}
            
          /> :
          <h3>no values</h3>}
      </CalendarWrapper>
      
      <DatePickerWrapper>
      </DatePickerWrapper>
    </CalculatorWrapper>
  )
}

export default CalculatorComponent