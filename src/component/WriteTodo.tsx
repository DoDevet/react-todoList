import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, todoList } from "../atom";

interface IForm {
  todo: string;
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function WriteTodo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodos = useSetRecoilState(todoList);
  const category = useRecoilValue(categoryState);
  const onValid = ({ todo }: IForm) => {
    setValue("todo", "");
    setTodos((prev) => [
      {
        id: Date.now(),
        text: todo,
        category: category,
      },
      ...prev,
    ]);
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input {...register("todo")} placeholder="Write to do"></input>
    </Form>
  );
}

export default React.memo(WriteTodo);
