import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":id",
    element: <Detail />,
  },
]);

export default router;
