import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddList = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FBFDFC",
        padding: 2,
        width: "160px",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        cursor: "pointer",
        marginBottom: 2,
      }}
    >
      {/* Plus Icon */}
      <AddIcon sx={{ color: "#000000" }} />

      {/* Text */}
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 500,
          lineHeight: "20px",
          color: "#1B281B",
          textAlign: "left",
        }}
      >
        Add List
      </Typography>
    </Box>
  );
};

export default AddList;
