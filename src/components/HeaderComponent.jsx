import React from 'react'
import { ContainerMedium } from './component-styles/Common.style';
import { HeaderWrapper, LogoBox, NavBox } from './component-styles/Header.style';
import logo from './../assets/img/logo.png';

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <ContainerMedium>
        <LogoBox>
          <picture>
            <img src={logo} alt="logo" />
          </picture>
        </LogoBox>
        <NavBox>
          <ul>
            <li>
              <a href="#main">inicio</a>
            </li>
            <li>
              <a href="#sub-main">Saber más</a>
            </li>
          </ul>        
        </NavBox>
      </ContainerMedium> 
    </HeaderWrapper>
  )
}

export default HeaderComponent;