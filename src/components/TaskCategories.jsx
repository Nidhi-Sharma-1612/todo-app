import { Box, Typography } from "@mui/material";

const categories = [
  { id: 1, text: "All Tasks", img: "/images/task.png" },
  { id: 2, text: "Today", img: "/images/calendar.png" },
  { id: 3, text: "Important", img: "/images/shopping.png" },
  { id: 4, text: "Planned", img: "/images/health.png" },
  { id: 5, text: "Assigned to me", img: "/images/travel.png" },
];

const TaskCategories = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FBFDFC",
        padding: 2,
        width: "160px",
        marginBottom: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {/* Category Image */}
            <Box
              component="img"
              src={category.img}
              alt={`${category.text} Icon`}
              sx={{ width: 24, height: 24 }}
            />
            {/* Category Text */}
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: "20px",
                color: "#1B281B",
                textAlign: "left",
              }}
            >
              {category.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TaskCategories;
