import React from "react";
/**
 * Bootsrap
 */
//import "bootstrap-icons/font/bootstrap-icons.css";
//import "remixicon/fonts/remixicon.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";

//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js"; /
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
//import "./index.css";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
//import { UserContextProvider } from "./contexts/UserContext.tsx";
import { CustomProvider } from "rsuite";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <CustomProvider theme="dark">
            <CookiesProvider>
                <QueryClientProvider client={queryClient}>
                   {/* <UserContextProvider>*/ }
                        <RouterProvider router={router} />
                    {/*</UserContextProvider>*/}
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </CookiesProvider>
        </CustomProvider>
    </React.StrictMode>
);

