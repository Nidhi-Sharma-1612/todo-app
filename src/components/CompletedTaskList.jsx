import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import CompletedTask from "./CompletedTask";

const CompletedTaskList = () => {
  const completedTasks = useSelector((state) => state.tasks.completedTasks);

  return (
    <Box
      sx={{
        maxHeight: "300px", // Limit the height
        overflowY: "auto", // Enable vertical scrolling
        paddingRight: 1, // Add space for the scrollbar
        scrollbarWidth: "thin", // For Firefox
        "&::-webkit-scrollbar": {
          width: "8px", // Scrollbar width for WebKit browsers
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#BDBDBD", // Scrollbar thumb color
          borderRadius: "4px", // Rounded corners for the scrollbar thumb
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#9E9E9E", // Scrollbar thumb hover color
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#F5F5F5", // Scrollbar track color
        },
      }}
    >
      {completedTasks.length === 0 ? (
        <Typography
          sx={{
            fontSize: "16px",
            color: "#BDBDBD",
            textAlign: "center",
            marginTop: 4,
          }}
        >
          No completed tasks yet!
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {completedTasks.map((task, index) => (
            <CompletedTask key={index} task={task} index={index} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CompletedTaskList;
