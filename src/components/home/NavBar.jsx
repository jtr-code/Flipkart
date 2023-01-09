import { Box } from "@mui/material";
import { navData } from "../../constants/data";

const NavBar = () => {
  return (
    <Box>
      {navData.map((curElem) => (
        <Box>
          <img src={curElem.url} alt="images" />
          <p>{curElem.text}</p>
        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
