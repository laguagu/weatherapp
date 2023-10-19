import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Routes() {
  return (
    <>
      <h1>All Routes</h1>
      <Link component={Link} to="/">
        HOME
      </Link>
    </>
  );
}
