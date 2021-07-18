import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    height:100%;
  }

  p,
  label,
  select {
    font-family: Segoe UI, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    font-size:14px
  }
  button {
    border-radius:0px;
  }
  .bmargin-5, .lblmargin-5, hr {
    margin-bottom:5px !important;
  }
  .pgContainer {
min-height: 100% !important;

  }
  .hrWarning{
    border-top:1px solid #ffc107;
  }
  .hrWarning-2x{
    border-top:2px solid #ffc107;
  }
  .hrSecondary{
    border-top:1px solid #7d7d7d;
  }
  .hrgray{
    border-top:1px solid #d3d3d3;
    margin-top:5px;
  }
  .reqSign{
    color:red;
  }
  .pad-0{
    padding:0px !important;
  }
  .pad-5{
    padding:0px 5px !important;
  }
  .pad-2{
    padding:0px 2px !important;
  }
  .pad-t-2{
    padding-top:2px !important;
  }
  .pad-t-5{
    padding-top:5px !important;
  }
  .pad-t-10{
    padding-top:10px !important;
  }
  .pad-t-15{
    padding-top:15px !important;
  }
.colrWood {
  color :#5B270B !important;
}
.colrWine{
  color:#900c3f !important;
}
.colrdYellow{
  color:#fa9905 !important;
}
.colrGreen{
  color: #4aa96c !important;
}
.colrSilver{
  color:#999b84 !important;
}
.colrMedRed {
  color :#bb371a !important;
}
.colrNavBlue {
  color: #5c6e91 !important;
}
.colrDrinkBlue{
  color: #56cfe1 !important;
}
.colrHospYellow{
  color:#fdb931 !important;
}
.colrCarrotRed{
  color: #ef7215 !important;
}

.css-1qhb1kr-TimelineContentDetailsWrapper {
  /* -webkit-align-items: center; */
  /* -webkit-box-align: center; */
  -ms-flex-align: center;
  /* align-items: center; */
  /* display: -webkit-box; */
  /* display: -webkit-flex; */
  display: -ms-flexbox;
  display: inline-table !important;
  /* -webkit-flex-direction: column; */
  -ms-flex-direction: column;
  /* flex-direction: column; */
  font-size: 0.8rem;
  margin: 0 auto;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: #0f52ba default;
  scrollbar-width: thin;
  -webkit-transition: max-height 100ms linear;
  transition: max-height 100ms linear;
  width: 100%;
  padding: 5px !important;
}
.css-1q2n3uv-TimelineContentDetailsWrapper{
  width:98% !important;
}
.css-u6cc4u-TimelineItemContentWrapper {
  min-height: 50px !important;
}
.css-1qwnlhg-VerticalCircleWrapper {
  width: 5% !important;
}
.css-14vnjl2-TimelineCardContentWrapper{
  width: 100% !important;
}
.css-1iv48dl-TimelineVerticalWrapper {
  padding: 5px !important;
}
.css-10ye5jm-TimelineMainWrapper {
  padding:0px !important;
}
.css-bvtij4-Circle.active::after{
  height:7px !important;
  width:7px !important;
}
.css-bvtij4-Circle{
  height:10px !important;
  width:10px !important;
}
.css-1qwnlhg-VerticalCircleWrapper::after{
  background:#ffe083 !important; 
}
.btn-sm{
  padding: 2px 5px;
}
.modal-header {
padding:10px 15px;  
border: none;
color:#9c9c9c;
}
.modal-content{
  border-radius:0px !important;
  font-size:14px;
}
.react-datepicker-wrapper, .react-datepicker__input-container, .react-datepicker__input-container input {
  width:100%;
}
.modal-45w {
  max-width: none;
  width:45% !important;
}
.popover-body {
  padding:5px;
}
.popover-body .list-group-item{
  padding:5px 10px;
}

`;

export default GlobalStyle;
