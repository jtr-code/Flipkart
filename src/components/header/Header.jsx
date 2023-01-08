import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";

// <---------------------------------------------Components import starts---------------------------------------->

import Search from "./Search";
import CustomButtons from "./CustomButtons";

// <---------------------------------------------Components import ends------------------------------------------>

//      <--------------------------------------- styled section starts-------------------------------->

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 56px;
`;

const ComponentLogo = styled(Box)`
  margin-left: 368px;
  cursor: pointer;
  font-size: 14px;
`;

const ComponentPlusLogo = styled(Box)`
  display: flex;
`;

const SubHeading = styled(Typography)`
  color: #f0f0f0;
  font-size: 11px;
  font-style: italic;
  margin-top: -5px;
  font-family: Roboto, Arial, sans-serif;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginBottom: 9,
  marginLeft: 1,
  marginTop: -4,
});

//      <--------------------------------------- styled section ends-------------------------------->

const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 56 }}>
        <ComponentLogo>
          <img src={logoURL} alt="Flipkart" style={{ width: "75px" }} />
          <ComponentPlusLogo>
            <SubHeading>
              Explore&nbsp;
              <span style={{ color: "#ffe500", fontWeight: "500" }}>Plus</span>
            </SubHeading>
            <PlusImage src={subURL} alt="pluslogo" />
          </ComponentPlusLogo>
        </ComponentLogo>
        <Search />
        <Box>
          <CustomButtons />
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
