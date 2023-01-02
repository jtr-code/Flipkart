import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";

// --------------------------------------- styled section starts--------------------------------//

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 56px;
`;

const ComponentLogo = styled(Box)`
  margin-left: 20%;
 
  line-height: 15.4px;
`;

const ComponentPlusLogo = styled(Box)`
  display: flex;
  font-style: italic;
`;

// --------------------------------------- styled  section ends--------------------------------//

const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar>
        <ComponentLogo>
          <img src={logoURL} alt="Flipkart" style={{ width: "75px" }} />
          <ComponentPlusLogo>
            <Typography>Explore <span style={{color:"ffe500"}}>Plus</span></Typography>
            <img src={subURL} alt="pluslogo" />
          </ComponentPlusLogo>
        </ComponentLogo>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
