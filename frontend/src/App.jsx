import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import RouteTest from "./components/Routes";
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
    {
      path:"test",
      element: <RouteTest/>
    }
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
