import { useRecoilValue } from "recoil";
import { todoSelector } from "../atom";
import CategorySetting from "../component/CategorySetting";

import ToDo from "../component/ToDo";
import WriteTodo from "../component/WriteTodo";

function LoggedIn() {
  const todos = useRecoilValue(todoSelector);

  return (
    <>
      <CategorySetting />
      <WriteTodo />
      {todos.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
    </>
  );
}

export default LoggedIn;
