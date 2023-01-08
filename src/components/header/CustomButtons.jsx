// import Select, { SelectChangeEvent } from "@mui/material/Select";
// // import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";
import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
  box-shadow:none;
  border:1px solid #DBDBDB;
  padding:: 5px 40px 5px 40px;
  text-transform:none;
  font-weight:500;
  height:32px;
  width:130px;
`;

const CartWrapper = styled(Box)`
  display: flex;
  cursor: pointer;
`;

//      <--------------------------------------- styled section ends-------------------------------->

const CustomButtons = () => {
  return (
    <ButtonWrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: 5, width: 130, cursor: "pointer " }}>
        Become a Seller
      </Typography>
      {/* <InputLabel id="More-label">More</InputLabel>
      <Select label="More-label">
        <MenuItem value={10}>Notification Preferences</MenuItem>
        <MenuItem value={20}>24/7 Customer Support</MenuItem>
        <MenuItem value={30}>Advertise</MenuItem>
        <MenuItem value={30}>Download App</MenuItem>
      </Select> */}
      <Typography style={{ marginTop: 5, paddingRight: 10, cursor: "pointer" }}>
        More
      </Typography>
      <CartWrapper>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartWrapper>
    </ButtonWrapper>
  );
};

export default CustomButtons;
