/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import TodayTasks from "./TodayTasks";
import { useSelector } from "react-redux";
import Weather from "./Weather";

const Sidebar = () => {
  // Fetch user data directly from Redux store
  const user = useSelector((state) => state.auth.user);

  return (
    <Box
      sx={{
        width: { xs: "75%", md: "20%" },
        backgroundColor: "#EEF6EF",
        padding: 2,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        position: "relative", // Ensure proper positioning within the layout
        margin: "0 auto", // Center content horizontally on larger screens
      }}
    >
      {/* Profile Image */}
      <Box
        component="img"
        src={user?.profileImage || "/images/default-avatar.png"} // Use user's profile image or default avatar
        alt="Profile"
        sx={{
          width: "118px",
          height: "118px",
          borderRadius: "50%",
          marginBottom: 2,
          border: "2px solid #3F9142", // Add a subtle border for aesthetics
        }}
      />

      {/* Greeting Text */}
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 500,
          lineHeight: "20px",
          marginBottom: 3,
          textAlign: "center",
          color: "#1B281B",
        }}
      >
        {user ? `Hey, ${user.username}` : "Hey, Guest"}
      </Typography>

      {/* Weather */}
      <Weather />

      {/* Today’s Tasks */}
      <TodayTasks />
    </Box>
  );
};

export default Sidebar;
