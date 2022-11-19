import React from 'react';
import icons from './configIcons';
import { InfoBoxWrapper } from './component-styles/InfoBox.style';

const InfoBoxComponent = ({title, icon, description, bgColor}) => {  
  return (
    <InfoBoxWrapper bgBox ={bgColor}>
        {icons[icon]}
        <h3>{title}</h3>
        <p>{description}</p>
    </InfoBoxWrapper>
  )
}

export default InfoBoxComponent;