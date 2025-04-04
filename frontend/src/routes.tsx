import { createBrowserRouter, Navigate } from "react-router-dom";
import HolaMundo from "./pages/Main";
import IngredientIndex from "./pages/ingredients/IngredientIndex";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:  "/",
        element: <Layout/>,
        children:[
           { index: true, element: <Navigate to="/dashboard" /> },
           { path: "ingredients/index", element: <IngredientIndex /> },
           { path: "hola-mundo/index", element: <HolaMundo /> }
        ],
        errorElement: <ErrorPage/>
    },


]);

export default router;
