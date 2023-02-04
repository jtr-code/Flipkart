import { Button, Grid, styled, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";

//      <--------------------------------------- styled section starts-------------------------------->
const Container = styled(Grid)`
  padding: 30px 135px;
`;

const Header = styled(Grid)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Button)`
  padding: 16px 22px;
  background: #fff;
  width: 100%;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
`;

//      <--------------------------------------- styled section ends---------------------------------->
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance />
          </Grid>
        </Container>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
};

export default Cart;
