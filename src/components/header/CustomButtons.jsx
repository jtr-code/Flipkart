import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";

//component

import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

//      <--------------------------------------- styled section starts-------------------------------->

const ButtonWrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    align-items: center;
    font-size: 16px;
  }
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  cursor: pointer;
  background: #fff;
  border-radius: 2px;
  margin-left: 45px;
  box-shadow: none;
  border: 1px solid #dbdbdb;
  text-transform: none;
  font-weight: 500;
  height: 32px;
  width: 130px;
`;

const CartWrapper = styled(Box)`
  display: flex;
  cursor: pointer;
`;

//      <--------------------------------------- styled section ends-------------------------------->

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const { name, setName } = useContext(DataContext);

  return (
    <ButtonWrapper>
      {name ? (
        <Profile name={name} setName={setName} />
      ) : (
        <LoginButton
          variant="contained"
          sx={{ "&.MuiButtonBase-root:hover": { backgroundColor: "white" } }}
          onClick={handleOpenDialog}
        >
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 5, width: 130, cursor: "pointer " }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 5, paddingRight: 10, cursor: "pointer" }}>
        More
      </Typography>
      <CartWrapper>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartWrapper>
      <LoginDialog open={open} setOpen={setOpen} />
    </ButtonWrapper>
  );
};

export default CustomButtons;
