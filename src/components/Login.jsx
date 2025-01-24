import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography, TextField, Link, Alert } from "@mui/material";
import { login, setError } from "../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authError = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const from = location.state?.from?.pathname || "/tasks";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      dispatch(setError("Please fill in all fields!"));
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      dispatch(login({ email, password }));
    } else {
      dispatch(setError("Invalid email or password!"));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#F5F5F5",
        padding: { xs: 2, sm: 4 }, // Adjust padding for small screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          padding: { xs: 2, sm: 4 }, // Adjust padding for small screens
          borderRadius: 4,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFFFFF",
          maxWidth: { xs: "100%", sm: 500 }, // Full width on small screens
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#3F9142",
            marginBottom: 2,
            fontSize: { xs: "1.5rem", sm: "2rem" }, // Responsive font size
          }}
        >
          Welcome Back 👋
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
          }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
          }}
        />

        {authError && (
          <Alert
            severity="error"
            sx={{
              width: "100%",
              fontSize: { xs: "12px", sm: "14px" }, // Responsive font size
            }}
          >
            {authError}
          </Alert>
        )}

        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            backgroundColor: "#3F9142",
            color: "#FFFFFF",
            textTransform: "none",
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "#357a38",
            },
            width: "100%",
          }}
        >
          Login
        </Button>

        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            color: "#757575",
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
          }}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            sx={{
              color: "#3F9142",
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
