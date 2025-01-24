import { useState } from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CompletedTaskList from "./CompletedTaskList";

const AppLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* Sidebar Drawer for Smaller Screens */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          onClose={toggleSidebar}
          sx={{
            "& .MuiDrawer-paper": {
              width: "75%",
              backgroundColor: "#EEF6EF",
              position: "relative",
            },
          }}
        >
          {/* Close Icon in Sidebar */}
          <IconButton
            onClick={toggleSidebar}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 2000,
              color: "#3F9142",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Sidebar />
        </Drawer>

        {/* Sidebar for Larger Screens */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "20%",
            backgroundColor: "#EEF6EF",
          }}
        >
          <Sidebar />
        </Box>

        {/* Main To-Do App */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "16px",
            boxSizing: "border-box",
            overflowY: "auto",
            width: { xs: "100%", md: "80%" },
          }}
        >
          <AddTask />
          <TaskList isCompleted={false} />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#142E15",
              opacity: "62%",
              marginTop: 4,
            }}
          >
            Completed
          </Typography>
          <CompletedTaskList isCompleted={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
