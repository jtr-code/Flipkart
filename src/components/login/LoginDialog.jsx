import styled from "@emotion/styled";
import { Box, Dialog, TextField, Typography, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

//      <--------------------------------------- styled section starts------------------------------>

const Component = styled(Box)`
  display: flex;
  height: 528px;
  max-width: 750px;
`;

const Image = styled(Box)`
  background: url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat;
  color: #fff;
  background-color: #2874f0;
  background-position: 50% 85%;
  padding: 40px 33px 40px 33px;
  & > p {
    margin-top: 12px;
    color: #dbdbdb;
    font-size: 18px;
  }
`;

const ReqBtn = styled(Button)`
  background-color: #fb641b;
  text-transform: none;
`;

const Wrapper = styled(Box)`
  padding: 56px 35px 16px 35px;
`;

//      <--------------------------------------- styled section ends-------------------------------->

const LoginDialog = ({ open, setOpen }) => {
  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleCloseDialog}>
        <Component>
          <Image>
            <Typography variant="h5">Login</Typography>
            <Typography>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>
          <Wrapper>
            <TextField label="Enter Email/Mobile Number" variant="standard" />
            <Typography>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <ReqBtn variant="contained">Request OTP</ReqBtn>
            <Typography>New to Flipkart?Create an Account</Typography>
          </Wrapper>
          <ClearIcon
            onClick={handleCloseDialog}
            style={{ cursor: "pointer" }}
          />
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
