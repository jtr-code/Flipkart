import { styled } from "@mui/material";
import { Box } from "@mui/material";
import { navData } from "../../constants/data";

//      <--------------------------------------- styled section starts-------------------------------->

const Component = styled(Box)`
  display: flex;
  margin: 55px 350px 0 300px;
  justify-content: space-between;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  text-align: center;
  font-weight: 550;
 
  }
`;

//      <--------------------------------------- styled section ends-------------------------------->

const NavBar = () => {
  return (
    <Component>
      {navData.map((curElem) => (
        <Box key={crypto.randomUUID()}>
          <img style={{ width: 64, height: 64 }} src={curElem.url} alt="nav" />
          <p>{curElem.text}</p>
        </Box>
      ))}
    </Component>
  );
};

export default NavBar;
