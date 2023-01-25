import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
  }
  

  :focus{
    outline:0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }
  body{
    background-color:${(props) => props.theme['base-background']};
    color:${(props) => props.theme['base-text']};
    overflow-y:scroll;

    a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    line-height: 1.6;
    font-weight: bold;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border-color 0.2s;
    }
  }
    
  }
  body, input, textarea, button{
    font: 400 1rem 'Nunito',sans-serif;
  }

  
`
