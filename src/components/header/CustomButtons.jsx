import { Box, Button, styled, Typography } from "@mui/material";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// // import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//      <--------------------------------------- styled section starts-------------------------------->

const ButtonWrapper = styled(Box)`
  display: flex;

  margin: 0 3% 0 auto;
`;

const CartWrapper = styled(Box)`
  display: flex;
`;

//      <--------------------------------------- styled section ends-------------------------------->

const CustomButtons = () => {
  return (
    <ButtonWrapper>
      <Button variant="contained">Login</Button>
      <Typography>Become a Seller</Typography>
      {/* <InputLabel id="More-label">More</InputLabel>
      <Select label="More-label">
        <MenuItem value={10}>Notification Preferences</MenuItem>
        <MenuItem value={20}>24/7 Customer Support</MenuItem>
        <MenuItem value={30}>Advertise</MenuItem>
        <MenuItem value={30}>Download App</MenuItem>
      </Select> */}
      <Typography>More</Typography>
      <CartWrapper>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartWrapper>
    </ButtonWrapper>
  );
};

export default CustomButtons;
