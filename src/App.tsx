import { RouterProvider } from "react-router/dom";
import "./index.css";
import { createHashRouter } from "react-router";
import { routes } from "./router/routes";


export function App() {
  return <RouterProvider router={createHashRouter(routes)} />
}

export default App;
