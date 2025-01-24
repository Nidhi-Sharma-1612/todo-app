import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/slices/weatherSlice";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import getUserLocation from "../utils/getUserLocation";

const Weather = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        const { latitude, longitude } = await getUserLocation();
        dispatch(fetchWeather({ latitude, longitude }));
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocationAndWeather();
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        sx={{
          backgroundColor: "#FBFDFC",
          padding: 2,
          width: "160px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          marginBottom: 2,
        }}
      >
        <CircularProgress size={24} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          backgroundColor: "#FBFDFC",
          padding: 2,
          width: "160px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          marginBottom: 2,
        }}
      >
        <Alert severity="error" sx={{ fontSize: "12px" }}>
          {error}
        </Alert>
      </Box>
    );
  }

  if (data) {
    return (
      <Box
        sx={{
          backgroundColor: "#FBFDFC",
          padding: 2,
          width: "160px",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          borderRadius: "8px",
          marginBottom: 2,
        }}
      >
        {/* Weather Icon */}
        <Box
          component="img"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          sx={{ width: 40, height: 40 }}
        />

        {/* Weather Info */}
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1B281B",
              lineHeight: "20px",
            }}
          >
            {Math.round(data.main.temp - 273.15)}°C
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#6B6B6B",
              textTransform: "capitalize",
            }}
          >
            {data.weather[0].description}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#FBFDFC",
        padding: 2,
        width: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        marginBottom: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          color: "#1B281B",
        }}
      >
        Fetching weather data...
      </Typography>
    </Box>
  );
};

export default Weather;
