import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box,Grid, styled } from "@mui/material";
import { getProductDetails } from "../../redux/actions/productActions";
import ActionDetails from "./ActionDetails";
import ProductDetail from "./ProductDetail";

//      <--------------------------------------- styled section starts-------------------------------->

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;
const Container = styled(Grid)`
  background: #FFFFF;
  display: flex;
`;
const RightContainer = styled(Grid)`
  margin-top: 50px;
`;
//      <--------------------------------------- styled section ends-------------------------------->
const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);


  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionDetails product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
