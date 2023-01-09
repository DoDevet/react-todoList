import styled from "styled-components";
import { useForm } from "react-hook-form";

import { useSetRecoilState } from "recoil";
import { isLoggedIn } from "../atom";

interface IForm {
  username: string;
}

const Containter = styled.div`
  text-align: center;
  margin-top: 15px;
`;

function Login() {
  const { register, handleSubmit } = useForm<IForm>();
  const setLoggedIn = useSetRecoilState(isLoggedIn);
  const onValid = ({ username }: IForm) => {
    localStorage.setItem("username", username);
    setLoggedIn(username);
  };
  return (
    <Containter>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("username")}
          placeholder="What is your name?"
        ></input>
      </form>
    </Containter>
  );
}

export default Login;
