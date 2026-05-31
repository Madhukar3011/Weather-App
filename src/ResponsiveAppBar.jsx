import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const settings = ["Profile", "Settings", "Logout"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ gap: 1, minHeight: { xs: 56, md: 60 }, px: { xs: 1, md: 2 } }}
        >
          <Box
            component="img"
            src="/logo.jpg"
            alt="Weather logo"
            sx={{
              display: "flex",
              height: { xs: 110, md: 160 },
              width: "auto",
              maxWidth: { xs: 190, md: 600 },
              objectFit: "contain",
              backgroundColor: "transparent",
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0, pr: 1 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, backgroundColor: "transparent" }}
              >
                <Avatar
                  alt="User Profile"
                  src="/kal.jpg"
                  sx={{ backgroundColor: "transparent" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "45px",
                "& .MuiPaper-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(4px)",
                  blur: 0.4,
                },
              }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
