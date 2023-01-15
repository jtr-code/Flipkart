import styled from "@emotion/styled";
import { Box, Dialog, TextField, Typography, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

//      <--------------------------------------- styled section starts------------------------------>

const Component = styled(Box)`
  display: flex;
  height: 528px;
`;

const Image = styled(Box)`
  width: 270px;
  background: url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat;
  color: #fff;
  background-color: #2874f0;
  background-position: 50% 85%;
  padding: 40px 33px;

  & > p {
    margin-top: 12px;
    color: #dbdbdb;
    font-size: 18px;
  }
`;

const ReqBtn = styled(Button)`
  background-color: #fb641b;
  text-transform: none;
  height: 48px;
  width: 100%;
  border-radius: 2px;
  padding: 10px 20px 10px 20px;
  font-weight: 550;
`;

const Wrapper = styled(Box)`
  padding: 56px 35px 16px 35px;
  position: relative;
`;

const TextWrapper = styled(Typography)`
  color: #878787;
  font-size: 11px;
  padding: 19px 0px;
  width: 100%;
`;

const Text = styled(Typography)`
  color: #2874f0;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  top: 476.406px;
  bottom: 32px;
  right: 0px;
  left: 0px;
  cursor: pointer;
`;

//      <--------------------------------------- styled section ends-------------------------------->
const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);

  const handleCloseDialog = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "750px",
          },
        },
      }}
    >
      <Component>
        <Image>
          <Typography
            style={{ fontWeight: "bold", fontSize: "28px", color: "#fff" }}
          >
            {account.heading}
          </Typography>
          <Typography>{account.subHeading}</Typography>
        </Image>
        {account.view === "login" ? (
          <Wrapper>
            <TextField
              label="Enter Email/Mobile Number"
              variant="standard"
              style={{ width: "100%" }}
            />
            <TextWrapper>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </TextWrapper>
            <ReqBtn
              variant="contained"
              sx={{
                "&.MuiButtonBase-root:hover": { backgroundColor: "#fb641b" },
              }}
            >
              Request OTP
            </ReqBtn>
            <Text onClick={() => toggleSignup()}>
              New to Flipkart?Create an Account
            </Text>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              label="Enter Mobile Number"
              variant="standard"
              style={{ width: "100%" }}
            />
            <TextWrapper>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </TextWrapper>
            <ReqBtn
              variant="contained"
              sx={{
                "&.MuiButtonBase-root:hover": { backgroundColor: "#fb641b" },
              }}
            >
              Continue
            </ReqBtn>
            <ReqBtn
              style={{
                backgroundColor: "#fff",
                color: "#2874F0",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
                padding: "10px 20px 10px 20px",
                margin: " 16px 0 0 0",
              }}
            >
              Existing User? Log in
            </ReqBtn>
          </Wrapper>
        )}

        <ClearIcon
          onClick={handleCloseDialog}
          style={{
            cursor: "pointer",
          }}
        />
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
