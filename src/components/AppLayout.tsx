import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import HeaderHome from "./HeaderHome";


const AppLayout = () => {
    const [search, setSearch] = useState("");
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="flex flex-col min-h-screen">
            {isHomePage
                ? <HeaderHome search={search} setSearch={setSearch} />
                : <Header />}
            <main>
                <Outlet context={{ search, setSearch }} />
            </main>
        </div>
    );
}

export default AppLayout;