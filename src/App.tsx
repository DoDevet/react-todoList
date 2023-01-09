import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import ToDoScreen from "./screen/ToDoScreen";

const GlobalStyle = createGlobalStyle`
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100vh;
    background-color: black;
    color:white;
    background-color: ${(props) => props.theme.bgColor};
  }
  input{
    text-align: center;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border-color 0.5s ease-in-out;
  padding: 15px 0px;
  font-size: 18px;
  margin-bottom: 25px;
  color: whitesmoke;
  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.8);
  }
  }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ToDoScreen />
    </>
  );
}

export default App;
