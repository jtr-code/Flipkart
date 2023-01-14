import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

//      <--------------------------------------- styled section starts------------------------------>

const ImageContainer = styled("img")({
  width: "100%",
  height: "280px",
  objectFit: "contain",
});

//      <--------------------------------------- styled section ends-------------------------------->
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
    >
      {bannerData.map((curElem) => (
        <Box key={crypto.randomUUID()}>
          <ImageContainer src={curElem.url} alt="banner" />
        </Box>
      ))}
    </Carousel>
  );
};

export default Banner;
