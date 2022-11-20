import React, { useState } from 'react'
import { ButtonRetake, CalculatorWrapper, CalendarWrapper, DatePickerWrapper, InputsWrapper,  LegendIcon,  LegendItem,  LegendText,  LegendWrapper,  SingleInputWrapper } from './styles/Calculator.style'
import { Calendar ,DateRangePicker  } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import useCalculator from './useCalculator';

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { cycleLengthArray, periodLengthArray } from './config';


const CalculatorComponent = () => {
  const [value, setValue] = useState(new Date());
  

  const {allValues, calculateMenstrualCycle, selectedCycle, setSelectedCycle, selectedLasting, setSelectedLasting, isShow, setIsShow} = useCalculator();

  
   
  //  console.log(value);
  //pass multiples dates ranges to the calendar
  const handleSelect = (val) => {
    
    if(selectedLasting && selectedCycle){
      calculateMenstrualCycle(val.toDateString(), selectedCycle, selectedLasting);    
    }
    setValue(val);
    setIsShow(true);
  }
 
  const handleSelectDate = (ranges) => {
    console.log(ranges)    
  } 
  
  
  return (
    <CalculatorWrapper id='calculator'>
      <h2>Calculadora Menstrual</h2>
      <p>La menstruación normalmente llega una vez al mes (cada 28-30 días), pero para muchas mujeres no es una ciencia exacta, 
        predecir la fecha precisa y duración de su siguiente periodo puede no ser tan sencillo. 
        Es aquí en donde entran las calculadoras de periodo a ayudarnos.</p>
      <CalendarWrapper>
        <InputsWrapper>
        {
          !isShow &&         
        <>        
          <SingleInputWrapper >
          <InputLabel id="demo-simple-select-label">¿Cuánto dura tu ciclo?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCycle}
              label="Age"
              onChange={(e)=> setSelectedCycle(e.target.value)}
              
            >
              {
                cycleLengthArray.map((item, index) => (
                  <MenuItem key={index} value={item}>{item}</MenuItem>
                ))
              }            
            </Select>
          </SingleInputWrapper>
          <SingleInputWrapper>
          <InputLabel id="demo-simple-select-label">¿Cuánto suele durar tu periodo?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedLasting}
              label="Age"
              onChange={(e)=> setSelectedLasting(e.target.value)}
              
            >
              {
                periodLengthArray.map((item, index) =>  (
                  <MenuItem key={index} value={item}>{item}</MenuItem>
                ))

              }
              
            </Select>
          </SingleInputWrapper>
          </>
        }   
        </InputsWrapper>
        {
          !isShow &&
          <Calendar
            date={value}
            onChange={handleSelect}
          />
        }
        {
        (
         isShow && allValues && allValues.length
        ) &&
        <>
          <DateRangePicker ranges={allValues}
            showDateDisplay={false}
            dragSelectionEnabled={false}
            showMonthAndYearPickers={false}
            showSelectionPreview={false}
            showPreview={false}
            onChange={handleSelectDate}
            
          /> 
          <LegendWrapper>
            <LegendItem>              
              <LegendIcon color='pre'></LegendIcon>
              <LegendText>pre-periodo</LegendText>
            </LegendItem>
            <LegendItem>              
              <LegendIcon color='period'></LegendIcon>
              <LegendText>periodo</LegendText>
            </LegendItem>
            <LegendItem>
              <LegendIcon color='post'></LegendIcon>
              <LegendText>post periodo</LegendText>
            </LegendItem>
            <LegendItem>              
              <LegendIcon color='pico'></LegendIcon>
              <LegendText>pico de la ovulación</LegendText>
            </LegendItem>
          </LegendWrapper>
          
          <ButtonRetake onClick={()=>setIsShow(false)}>
            Volver a calcular
            </ButtonRetake>        
        </>
          }
      </CalendarWrapper>
      <DatePickerWrapper>
      </DatePickerWrapper>
    </CalculatorWrapper>
  )
}

export default CalculatorComponent