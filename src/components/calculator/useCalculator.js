import {  useState } from "react";


const useCalculator = () => {
  
  const [allValues, setAllValues] = useState([]);  
  const [selectedCycle, setSelectedCycle] = useState(21);
  const [selectedLasting, setSelectedLasting] = useState(1);
  const[isShow, setIsShow] = useState(false);

  const addDaysToDate = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  let allDataArr = [];
  const calculateMenstrualCycle = (date, cycleLength, periodLength) => {    
    for(let i = 0; i < 3; i++) {
      
      const periodStartDate =  new Date(date);
      const periodEndDate = addDaysToDate(periodStartDate, periodLength-1);
  
      const prePeriodStartDate = addDaysToDate(periodStartDate, -2);
      const prePeriodEndDate = addDaysToDate(prePeriodStartDate, 1);
  
      const postPeriodStartDate = addDaysToDate(periodEndDate, 1);
      const postPeriodEndDate = addDaysToDate(postPeriodStartDate, 1);
  
  
      
      const ovulationStartDate = addDaysToDate(periodStartDate, 10);
      const ovulationEndDate = addDaysToDate(ovulationStartDate, 4);
      
      const prePeriod ={
        startDate: prePeriodStartDate,
        endDate: prePeriodEndDate,
        color: 'yellow',
      }
      const period = {
        startDate: periodStartDate,
        endDate: periodEndDate,
        color: "red",
      };
      const postPeriod ={
        startDate: postPeriodStartDate,
        endDate: postPeriodEndDate,
        color:'orange'
      }
      const ovulationCycle = {
        startDate: ovulationStartDate,
        endDate: ovulationEndDate,
        color:'green',
      }
      allDataArr = [...allDataArr, prePeriod, period, postPeriod, ovulationCycle];
      date = addDaysToDate(date, cycleLength+4);
    }
    
    setAllValues(allDataArr);

    
  }

  return {addDaysToDate, 
          calculateMenstrualCycle, 
          allValues,   
          selectedCycle,
          setSelectedCycle,     
          selectedLasting,
          setSelectedLasting,  
          isShow,
          setIsShow,
        };
}

export default useCalculator