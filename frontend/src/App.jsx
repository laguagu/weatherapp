import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import theme from "./theme";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
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
