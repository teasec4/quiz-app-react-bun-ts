import { RouterProvider } from "react-router/dom";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { routes } from "./router/routes";


export function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App;
