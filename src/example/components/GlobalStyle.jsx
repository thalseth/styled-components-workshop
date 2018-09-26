import { createGlobalStyle } from 'styled-components';
import colors from '../../colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700|Roboto+Slab:300,400');
  
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body, html {
    background-color: #fff;
    font-family: 'Raleway', sans-serif;
    color: ${colors.primaryTextColor};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
  }

  img {
    max-width: 100%;
  }
}`;
