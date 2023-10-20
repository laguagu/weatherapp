import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import Routes from "./components/Routes";
import theme from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
