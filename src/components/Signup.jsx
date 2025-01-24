import { useState } from "react";
import { Box, Button, Typography, TextField, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      username,
      email,
      password,
      profileImage: profileImage || null,
    };

    // Save to localStorage for persistence
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Signup successful!");

    // Redirect to login
    window.location.href = "/login";
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set image as base64 string
      };
      reader.readAsDataURL(file);
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
        padding: { xs: 2, sm: 4 }, // Responsive padding
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          padding: { xs: 2, sm: 4 }, // Responsive padding
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
          Create an Account
        </Typography>

        {/* Profile Image Upload */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            src={profileImage} // Show uploaded image if available
            alt="Profile Image"
            sx={{
              width: { xs: 64, sm: 80 }, // Responsive size
              height: { xs: 64, sm: 80 },
              marginBottom: 1,
              border: "2px solid #3F9142",
            }}
          >
            {!profileImage && (
              <AccountCircleIcon
                sx={{
                  fontSize: { xs: 80, sm: 100 }, // Responsive icon size
                  color: "#5f5f5f",
                }}
              />
            )}
          </Avatar>
          <Button
            variant="outlined"
            component="label"
            sx={{
              textTransform: "none",
              color: "#3F9142",
              borderColor: "#3F9142",
              "&:hover": {
                backgroundColor: "#E8F1E9",
              },
            }}
          >
            Upload Profile Image
            <input
              type="file"
              hidden
              onChange={handleImageUpload}
              accept="image/*"
            />
          </Button>
        </Box>

        {/* Username Field */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        />

        {/* Email Field */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        />

        {/* Confirm Password Field */}
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        />

        {/* Sign Up Button */}
        <Button
          variant="contained"
          onClick={handleSignup}
          sx={{
            backgroundColor: "#3F9142",
            color: "#FFFFFF",
            textTransform: "none",
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            padding: { xs: "8px 16px", sm: "10px 20px" }, // Responsive padding
            "&:hover": {
              backgroundColor: "#357a38",
            },
            width: "100%",
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
