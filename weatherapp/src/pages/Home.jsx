import { Link } from "react-router-dom";
import WeatherGrids from "../components/WeatherGrids";
import { Button } from "@mui/material";
function WeatherApp() {
  return (
    <>
      <Button component={Link} to="test">
        Routes
      </Button>
      <WeatherGrids />
    </>
  );
}

export default WeatherApp;
