import { createBrowserRouter } from "react-router-dom";
import HolaMundo from "./pages/Main";

const router = createBrowserRouter([
    {
        path:  "/",
        element: <HolaMundo/>,
    },


]);

export default router;
