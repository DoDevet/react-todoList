import styled from "styled-components";
import { AiTwotoneDelete } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { ITodo, todoList } from "../atom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { categorySelector } from "../atom";
import { useTheme } from "styled-components";
const TodoTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 5px;
`;

const DeleteIconWrapper = styled.div``;

const List = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border-color 0.5s ease-in-out;
  ${DeleteIconWrapper} {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  &:hover {
    border-color: white;
    ${DeleteIconWrapper} {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

function ToDo({ id, text }: any) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const setTodo = useSetRecoilState<ITodo[]>(todoList);
  const categoryList = useRecoilValue(categorySelector);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteTodo = () => {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (e: any) => {
    setTodo((prevToDos) => {
      const cloneToDos = [...prevToDos];
      const targetIndex = cloneToDos.findIndex((item) => item.id === id);
      const newTodo = { text, id, category: e.currentTarget.title };
      cloneToDos.splice(targetIndex, 1, newTodo);
      return cloneToDos;
    });
    setAnchorEl(null);
  };
  return (
    <List>
      <TodoTextWrapper>
        <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AiOutlineMenuUnfold color="white" fontSize={20} />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: {
                backgroundColor: theme.boxColor,
                color: "inherit",
              },
            }}
          >
            {categoryList.map((item, index) => (
              <MenuItem
                key={index}
                style={{ borderBottom: "1px solid white", fontSize: 13 }}
                title={item as any}
                onClick={editTodo}
              >
                {item as any}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <span>{text}</span>
      </TodoTextWrapper>
      <DeleteIconWrapper>
        <AiTwotoneDelete onClick={deleteTodo} />
      </DeleteIconWrapper>
    </List>
  );
}

export default ToDo;
