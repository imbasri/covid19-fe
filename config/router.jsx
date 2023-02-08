// setup
import { createBrowserRouter } from "react-router-dom";

// import pages
import Error from "../src/pages/error";
import Home from "../src/pages/home";
import Button from "../src/elements/Button";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  {
    path: "button",
    element: <Button />,
  },
]);

export default router;
