import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import { useState } from "react";

const Component = styled(Menu)`
  margin-top: 5px;
`;
const LogOut = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;
const Profile = ({ name, setName }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setName("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {name}
        </Typography>
        <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleClose();
              logoutUser();
            }}
          >
            <PowerSettingsNewIcon
              color="primary"
              fontSize="small"
              cursor="pointer"
            />
            <LogOut>Logout</LogOut>
          </MenuItem>
        </Component>
      </Box>
    </>
  );
};

export default Profile;
