import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Routes() {
  return (
    <>
      <h1>All Routes</h1>
      <Link component={Link} to="/">HOME</Link>
      <Divider/>
      <Link component={Link} to="/login">LOGIN</Link>
    </>
  );
}
