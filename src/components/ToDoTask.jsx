/* eslint-disable react/prop-types */
import { Box, Checkbox, Typography, IconButton, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../redux/slices/tasksSlice";

const ToDoTask = ({ task, index, isCompleted }) => {
  const dispatch = useDispatch();

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion({ index, isCompleted }));
  };

  const handleDelete = () => {
    dispatch(deleteTask({ index, isCompleted }));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#FF5252"; // Red
      case "Medium":
        return "#FFCA28"; // Yellow
      case "Low":
        return "#42A5F5"; // Blue
      default:
        return "#BDBDBD"; // Default gray
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
        paddingRight: "16px",
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      {/* Checkbox and Task Text */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Checkbox */}
        <Checkbox
          checked={task.completed}
          onChange={handleToggleCompletion}
          sx={{
            color: "#3F9142",
            "&.Mui-checked": {
              color: "#3F9142",
            },
            "& .MuiSvgIcon-root": {
              fontSize: 20,
            },
          }}
        />
        {/* Task Text */}
        <Typography
          sx={{
            fontSize: "14px",
            color: task.completed ? "#9E9E9E" : "#1B281B", // Dimmed for completed
            textDecoration: task.completed ? "line-through" : "none", // Strikethrough for completed
          }}
        >
          {task.text}
        </Typography>
        {/* Priority Chip */}
        <Chip
          label={task.priority}
          sx={{
            backgroundColor: getPriorityColor(task.priority),
            color: "#FFFFFF",
            fontSize: "12px",
            fontWeight: "bold",
            height: "22px",
            borderRadius: "4px",
          }}
        />
      </Box>

      {/* Delete Button */}
      <IconButton onClick={handleDelete}>
        <DeleteIcon
          sx={{
            color: "#E57373",
            fontSize: 24,
            cursor: "pointer",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default ToDoTask;
