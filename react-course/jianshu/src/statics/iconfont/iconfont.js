import {  injectGlobal} from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1531046516906'); /* IE9*/
    src: url('./iconfont.eot?t=1531046516906#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1531046516906') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1531046516906#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;


