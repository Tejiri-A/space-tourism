import { createBrowserRouter, RouterProvider } from "react-router";
import { Crew, Destination, Home, Layout, Technology } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "destination", Component: Destination },
      { path: "crew", Component: Crew },
      { path: "technology", Component: Technology },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
