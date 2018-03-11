import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default () => injectGlobal`
  ${styledNormalize}

  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Segoe UI Light"), local("Ubuntu Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: 300;
    src: local(".SFNSText-LightItalic"), local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"), local("Segoe UI Light Italic"), local("Ubuntu Light Italic"), local("Roboto-LightItalic"), local("DroidSans"), local("Tahoma");
  }

  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    src: local(".SFNSText-Regular"), local(".HelveticaNeueDeskInterface-Regular"), local(".LucidaGrandeUI"), local("Segoe UI"), local("Ubuntu"), local("Roboto-Regular"), local("DroidSans"), local("Tahoma");
  }

  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: 400;
    src: local(".SFNSText-Italic"), local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"), local("Segoe UI Italic"), local("Ubuntu Italic"), local("Roboto-Italic"), local("DroidSans"), local("Tahoma");
  }

  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 500;
    src: local(".SFNSText-Medium"), local(".HelveticaNeueDeskInterface-MediumP4"), local(".LucidaGrandeUI"), local("Segoe UI Semibold"), local("Ubuntu Medium"), local("Roboto-Medium"), local("DroidSans-Bold"), local("Tahoma Bold");
  }

  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: 500;
    src: local(".SFNSText-MediumItalic"), local(".HelveticaNeueDeskInterface-MediumItalicP4"), local(".LucidaGrandeUI"), local("Segoe UI Semibold Italic"), local("Ubuntu Medium Italic"), local("Roboto-MediumItalic"), local("DroidSans-Bold"), local("Tahoma Bold");
  }

  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 700;
    src: local(".SFNSText-Bold"), local(".HelveticaNeueDeskInterface-Bold"), local(".LucidaGrandeUI"), local("Segoe UI Bold"), local("Ubuntu Bold"), local("Roboto-Bold"), local("DroidSans-Bold"), local("Tahoma Bold");
  }

  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: 700;
    src: local(".SFNSText-BoldItalic"), local(".HelveticaNeueDeskInterface-BoldItalic"), local(".LucidaGrandeUI"), local("Segoe UI Bold Italic"), local("Ubuntu Bold Italic"), local("Roboto-BoldItalic"), local("DroidSans-Bold"), local("Tahoma Bold");
  }

  @font-face {
    font-family: 'Palooka BB';
    src: url('/fonts/PalookaBB-Italic.eot');
    src: url('/fonts/PalookaBB-Italic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/PalookaBB-Italic.woff2') format('woff2'),
        url('/fonts/PalookaBB-Italic.woff') format('woff'),
        url('/fonts/PalookaBB-Italic.ttf') format('truetype'),
        url('/fonts/PalookaBB-Italic.svg#PalookaBB-Italic') format('svg');
    font-weight: normal;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1em;
    font-family: system-ui;
    font-weight: 300;
  }

  img {
    max-width: 100%;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }
`;
