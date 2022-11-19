import React from 'react'
import InfoBoxComponent from './InfoBoxComponent';
import {  FirstMain, MainWrapper, SecondMain } from './component-styles/Main.style';
import CalculatorComponent from './calculator/CalculatorComponent';

const MainComponent = () => {
  return (
    <MainWrapper>
      <FirstMain id='main'>

      </FirstMain>
      <CalculatorComponent />
      <SecondMain id='sub-main'>
        <InfoBoxComponent title='sample title' icon='icon1' description='sample description' bgColor='tertiary' />
        <InfoBoxComponent title='sample title' icon='icon2' description='sample description' bgColor='quaternary' />
        <InfoBoxComponent title='sample title' icon='icon3' description='sample description' bgColor='quinary' />
        <InfoBoxComponent title='sample title' icon='icon4' description='sample description' bgColor='secondary' />
      </SecondMain>
    </MainWrapper>
  )
}

export default MainComponent;