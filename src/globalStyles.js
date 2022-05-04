import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&family=Inter:wght@100;200;300;400;600;700;800;900&family=Lora:ital,wght@1,500&family=Montserrat+Alternates:wght@400;700&family=Whisper&display=swap');


* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

 
 body {
    background-color: var(--white);
    font-family: Inter,  Montserrat Alternates,Lora,  Sans-Serif;
    letter-spacing: 1.3px;
    color: ${(props) => props.theme.colors.black};
  }
`;

export default GlobalStyle;
