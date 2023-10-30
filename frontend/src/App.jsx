import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import Routes from "./components/Routes";
import theme from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserProvider } from "./context/UserContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "routes",
      element: <Routes />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
