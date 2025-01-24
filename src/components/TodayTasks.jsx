import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import TaskChart from "./TaskChart";

const TodayTasks = () => {
  const toDoTasks = useSelector((state) => state.tasks.toDoTasks.length);
  const completedTasks = useSelector(
    (state) => state.tasks.completedTasks.length
  );
  const totalTasks = toDoTasks + completedTasks;

  return (
    <Box
      sx={{
        backgroundColor: "#FBFDFC",
        padding: 2,
        width: "160px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Header and Count Section */}
      <Box>
        {/* Header Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: "20px",
              color: "#1B281B",
            }}
          >
            Today Tasks
          </Typography>

          {/* Info Icon */}
          <InfoIcon sx={{ color: "#BDBDBD", fontSize: "16px" }} />
        </Box>

        {/* Count */}
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: "18px",
            color: "#1B281B",
            marginTop: 1,
          }}
        >
          {totalTasks}
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "#F0F0F0",
            marginTop: 1,
          }}
        />
      </Box>

      {/* Chart */}
      <TaskChart toDoTasks={toDoTasks} completedTasks={completedTasks} />
    </Box>
  );
};

export default TodayTasks;
