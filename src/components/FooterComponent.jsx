import React from 'react';
import { FooterContent, FooterFrame, FooterLogo, FooterMiddle, FooterRight, FooterWrapper } from './component-styles/Footer.style';
import logo from '../assets/img/logo.png'

const FooterComponent = () => {
  return (
   <FooterWrapper>       
      <FooterFrame>
        <FooterLogo>
          <picture>
            <img src={logo} alt="logo" />
          </picture>
        </FooterLogo>
        <FooterMiddle>
        <ul>
            <li><a href="#main">inicio</a></li>
            <li><a href="#sub-main">Saber más</a></li>
          
          </ul>
        </FooterMiddle>
        <FooterContent>
          <ul>
            <li><a href="/docs/Cartilla-Derechos-Sexuales-Adolescentes-Jovenes.pdf" target='_blank'>Cartilla de Derechos Sexuales</a></li>
            <li><a href="/docs/Política-de-privacidad.pdf" target='_blank'>Politicas de Privacidad</a></li>            
          </ul>
        </FooterContent>
      </FooterFrame>
      <FooterRight>
        <p>© 2022 - Todos los Derechos Reservados INPI</p>    
      </FooterRight>
   </FooterWrapper>
  )
}

export default FooterComponent;