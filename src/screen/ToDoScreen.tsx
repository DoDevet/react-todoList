import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoggedIn } from "../atom";
import Clock from "../component/Clock";
import LoggedIn from "./LoggedIn";
import Login from "./Login";

const Span = styled.span`
  font-size: 29px;
  margin-bottom: 30px;
  display: block;
  text-align: center;
`;

function ToDoScreen() {
  const logIn = useRecoilValue(isLoggedIn);
  return (
    <>
      <Clock />
      {logIn === null ? (
        <Login />
      ) : (
        <>
          <Span>{`Hello, ${logIn}`}</Span>
          <LoggedIn />
        </>
      )}
    </>
  );
}

export default ToDoScreen;
