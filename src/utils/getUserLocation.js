const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error.message || "Failed to fetch location");
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
};

export default getUserLocation;
