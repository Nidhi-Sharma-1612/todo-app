/* eslint-disable react/prop-types */
import { Box, Checkbox, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../redux/slices/tasksSlice";

const CompletedTask = ({ task, index }) => {
  const dispatch = useDispatch();

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion({ index, isCompleted: true }));
  };

  const handleDelete = () => {
    dispatch(deleteTask({ index, isCompleted: true }));
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
        {/* Pre-Checked Checkbox */}
        <Checkbox
          checked
          onChange={handleToggleCompletion} // Mark task as not completed
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
        {/* Task Text with Strikethrough */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "#1B281B",
            textDecoration: "line-through",
          }}
        >
          {task.text}
        </Typography>
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

export default CompletedTask;
