import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { categories, categorySelector, categoryState } from "../atom";
import { useTheme } from "styled-components";

export default function ReplaceTodoCategory() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: any) => {
    setAnchorEl(null);
  };
  const categoryList = useRecoilValue(categorySelector);
  return (
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
        {categoryList.map((item) => (
          <MenuItem
            style={{ borderBottom: "1px solid white", fontSize: 13 }}
            title={item as any}
            onClick={handleClose}
          >
            {item as any}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
