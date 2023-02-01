import { Typography, Box, styled } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

//      <--------------------------------------- styled section starts-------------------------------->

const SmallText = styled(Box)`
  font-size: 14px;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
`;

//      <--------------------------------------- styled section ends---------------------------------->

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 ratings and 1 reviews
        <Box component="span">
          <img
            src={fassured}
            alt="fassuredlogo"
            style={{ width: 78, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
          off
        </Box>
      </Typography>
      <Typography>
        <Typography>Available offers</Typography>
        <SmallText>
          <Typography>
            <StyledBadge /> Bank Offer 5% Cashback on Flipkart Axis Bank Card
            T&C
          </Typography>
          <Typography>
            <StyledBadge /> Special PriceGet extra 3% off (price inclusive of
            cashback/coupon) T&C
          </Typography>
          <Typography>
            <StyledBadge /> Buy this Product and Get Extra ₹500 Off on
            Two-Wheelers T&C
          </Typography>
          <Typography>
            <StyledBadge /> Partner OfferSign up for Flipkart Pay Later and get
            Flipkart Gift Card worth up to ₹750* Know More
          </Typography>
        </SmallText>
      </Typography>
    </>
  );
};

export default ProductDetail;
