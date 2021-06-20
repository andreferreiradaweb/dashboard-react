import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  * {
    --font: 'montserrat', sans-serif;
    --text: #3A3F60;
    --border: #e5e5e5;
    --red: #F05B5F;
    --yellow: #FECA42;
    --green: #25E8A1;
    --gray-bg: #F5F5F5;
    --white-bg: #fff;
    --white-default: #fff;
    --black: #222222;
    font-family: 'montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: #b0b0b0;
    outline: none;
  }  

  strong {
    font-size: 18px;
  }

  h1 {
    font-weight: bold;
    font-size: 70px;
  }

  img {
    max-width: 100%;
  }
`
