import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Box,
  Typography,
  InputBase,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { addTask } from "../redux/slices/tasksSlice";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(addTask({ text: task, priority }));
      setTask("");
      setPriority("Low");
    }
  };

  const isInputEmpty = task.trim() === "";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#142E15",
          opacity: "62%",
        }}
      >
        To Do
      </Typography>

      {/* Input and Action Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 2,
          backgroundColor: "rgba(232, 241, 233, 0.2)",
          borderTop: "1px solid #E0E0E0",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        {/* Input Container */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingY: 1,
          }}
        >
          <InputBase
            placeholder="Add A Task"
            value={task}
            onChange={(e) => setTask(e.target.value)} // Update local state
            sx={{
              width: "100%",
              fontSize: "16px",
              color: "#1B281B",
              padding: "5px 0",
              border: "none",
              outline: "none",
              "&:focus": {
                outline: "none",
                border: "none",
              },
            }}
          />
        </Box>

        {/* Row with Dropdown and Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1, // Reduce the gap
          }}
        >
          {/* Priority Label and Dropdown */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5, // Space between label and dropdown
            }}
          >
            {/* Priority Label */}
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#1B281B",
                opacity: isInputEmpty ? "50%" : "100%",
              }}
            >
              Priority:
            </Typography>

            {/* Priority Dropdown */}
            <FormControl
              size="small"
              sx={{
                minWidth: 120,
                backgroundColor: "#FFFFFF",
                borderRadius: "8px", // Rounded corners
              }}
              disabled={isInputEmpty} // Disable when input is empty
            >
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                sx={{
                  "& .MuiSelect-select": {
                    padding: "8px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#1B281B",
                  },
                }}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Add Task Button */}
          <Button
            variant="text"
            onClick={handleAddTask}
            disabled={isInputEmpty}
            sx={{
              backgroundColor: isInputEmpty ? "#D3D3D3" : "#3F9142",
              color: isInputEmpty ? "#A9A9A9" : "#FFFFFF",
              cursor: isInputEmpty ? "not-allowed" : "pointer",
              textTransform: "none",
              fontSize: "14px",
              padding: "8px 16px",
              fontWeight: 500,
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: isInputEmpty ? "#D3D3D3" : "#357a38",
              },
            }}
          >
            Add Task
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTask;
