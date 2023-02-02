import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

//      <--------------------------------------- styled section starts-------------------------------->

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: " 40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
  width: "95%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "44%",
  height: "50px",
  borderRadius: "2px",
  left: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "44%,",
  },
}));

//      <--------------------------------------- styled section ends-------------------------------->

const ActionDetails = ({ product }) => {
  return (
    <LeftContainer>
      <Image src={product.detailUrl} alt="singleproduct" />

      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb541b" }}>
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionDetails;
