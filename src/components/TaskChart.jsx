/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Legend } from "recharts";

const TaskChart = ({ toDoTasks = 0, completedTasks = 0 }) => {
  // Data for the chart
  const data = [
    { name: "Done", value: completedTasks },
    { name: "Pending", value: toDoTasks },
  ];

  // Colors for the chart slices
  const COLORS = ["#3F9142", "#142E15"];

  // Custom Legend Renderer
  const renderCustomLegend = ({ payload }) => {
    if (!payload) return null;

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 2,
          flexWrap: "wrap", // Ensure legend wraps on smaller screens
        }}
      >
        {payload.map((entry, index) => (
          <Box
            key={`legend-${index}`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              marginBottom: { xs: 1, sm: 0 }, // Add spacing for smaller screens
            }}
          >
            {/* Circle for legend */}
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: entry.color,
              }}
            />
            {/* Legend text */}
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                color: "#1B281B",
              }}
            >
              {entry.value}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  // Check if there are any tasks
  const hasTasks = completedTasks > 0 || toDoTasks > 0;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        maxHeight: "180px",
        padding: { xs: 1, sm: 2 },
        backgroundColor: "#FBFDFC",
        borderRadius: "8px",
      }}
    >
      {hasTasks ? (
        <PieChart
          width={window.innerWidth < 600 ? 140 : 180} // Adjust size dynamically based on screen width
          height={window.innerWidth < 600 ? 140 : 180}
        >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={window.innerWidth < 600 ? 30 : 40} // Adjust radius for smaller screens
            outerRadius={window.innerWidth < 600 ? 50 : 60}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* Custom Legend */}
          <Legend content={renderCustomLegend} />
        </PieChart>
      ) : (
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            color: "#BDBDBD",
            textAlign: "center",
          }}
        >
          No tasks available
        </Typography>
      )}
    </Box>
  );
};

export default TaskChart;
