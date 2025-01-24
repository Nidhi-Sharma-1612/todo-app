/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

const Logo = styled("img")({
  height: 32,
  marginLeft: 8,
});

const Navbar = ({ toggleSidebar }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Redirect to login page
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        {/* Menu Icon */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            sx={{ color: "#3F9142", marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <Logo src="/images/logo.png" alt="Logo" />
          </a>
        </Box>

        {/* Right-side Content */}
        {isAuthenticated ? (
          <Button
            variant="outlined"
            onClick={handleLogout}
            sx={{
              textTransform: "none",
              color: "#3F9142",
              borderColor: "#3F9142",
              "&:hover": {
                backgroundColor: "#E8F1E9",
              },
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{
              backgroundColor: "#3F9142",
              color: "#FFFFFF",
              textTransform: "none",
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "#357a38",
              },
            }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
