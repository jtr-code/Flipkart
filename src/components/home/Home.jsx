import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const Component = styled(Box)`
  padding: 8px;
  background-color: #f2f2f2;
  box-shadow: inset 0px 3px 3px -3px rgba(50, 50, 50, 0.75);
`;

const Home = () => {
  useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
