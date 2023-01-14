import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/system";

const Component = styled(Box)`
  padding: 8px;
  background-color: #f2f2f2;
  box-shadow: inset 0px 3px 3px -3px rgba(50, 50, 50, 0.75);
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
