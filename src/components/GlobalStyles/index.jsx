import { createGlobalStyle } from "styled-components";
import GandhiSansRegular from './fonts/GandhiSans-Bold.otf'
import GandhiSansBold from './fonts/GandhiSans-Bold.otf'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'GandhiSansRegular';
    }

    @font-face {
        font-family: 'GandhiSansRegular';
        src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});
    }

    @font-face {
        font-family: 'GandhiSansBold';
        src: local('Gandhi Sans Bold'), local('GandhiSansBold'), url(${GandhiSansBold});
    }
`

export default GlobalStyles;