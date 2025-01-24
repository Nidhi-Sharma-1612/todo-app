/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import ToDoTask from "./ToDoTask";

const TaskList = ({ isCompleted }) => {
  const tasks = useSelector((state) =>
    isCompleted ? state.tasks.completedTasks : state.tasks.toDoTasks
  );

  // Sort tasks by priority: High -> Medium -> Low
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return (priorityOrder[a.priority] || 4) - (priorityOrder[b.priority] || 4);
  });

  return (
    <Box
      sx={{
        maxHeight: "300px",
        overflowY: "auto",
        paddingRight: 1,
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#BDBDBD",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#9E9E9E",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#F5F5F5",
        },
      }}
    >
      {sortedTasks.length === 0 ? (
        <Typography
          sx={{
            fontSize: "16px",
            color: "#BDBDBD",
            textAlign: "center",
            marginTop: 4,
          }}
        >
          {isCompleted
            ? "No completed tasks."
            : "No tasks available. Start adding tasks!"}
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {sortedTasks.map((task, index) => (
            <ToDoTask
              key={index}
              task={task}
              index={index}
              isCompleted={isCompleted}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TaskList;
