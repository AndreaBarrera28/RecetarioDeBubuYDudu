import { Outlet } from "react-router-dom";
//import "@/globals.css";
import NavBar from "../conponents/layout/NavBar";

const Layout = () => {

    return (
        <>
            <NavBar />
            <div className="p-4">
                <Outlet />
                <span>HOME</span>
            </div>
        </>

    );
};

export default Layout;
