import { createGlobalStyle } from "styled-components";

const MainDefaultStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  * {
    font-family: 'Quicksand', sans-serif !important;
    /*font-family: "Boing-bold" !important;*/
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }


  body, *{
    font-family: 'Quicksand', sans-serif !important;
    line-height: normal;
    letter-spacing: normal;
    background-color: #ffffff !important;
  }

  .Mui-selected {
    background-color: yellow;
  }

  .MuiTabs-flexContainer {
    display: "flex";
    flex-direction: "column";
  }

  .MenuItem {
    color: black;
  }
  .MenuItem.selected { /* Increase the specificity */
    color: blue;
  }

  .ck-content {
    font-size: 16px;
    height: 323px;
  }

  .ck-editor__main {
    height: 323px;
  }

  .ql-container.ql-snow {
    border: 1px solid #ccc;
    height: 323px;
  }

  .app{
    display: flex;
    flex: 1;
    padding: 0;
    .appContent{
      display: flex;
      flex: 1;
      padding: 0;
    }
  }

`;


export default MainDefaultStyle;
