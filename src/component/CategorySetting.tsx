import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import styled, { useTheme } from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { categories, categoryState } from "../atom";
import AddCategory from "./AddCategory";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.accentColor};
  padding: 4px 15px;
  border-radius: 12px;
`;

export default function CategorySetting() {
  const theme = useTheme();
  const [category, setCategory] = useRecoilState(categoryState);
  const categoryList = useRecoilValue(categories);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: any) => {
    if (e.currentTarget.title !== "") {
      setCategory(e.currentTarget.title);
    }
    setAnchorEl(null);
  };

  return (
    <Container>
      <Wrapper>
        <Button
          style={{
            color: "inherit",
            fontWeight: 600,
          }}
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <span style={{ marginRight: 6 }}>{category}</span>
          <AiOutlineDown />
        </Button>
      </Wrapper>

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
            onClick={handleClose}
          >
            {item as any}
          </MenuItem>
        ))}

        <MenuItem onKeyDown={(e) => e.stopPropagation()} title="ADD">
          <AddCategory setAnchorEl={setAnchorEl} />
        </MenuItem>
      </Menu>
    </Container>
  );
}
