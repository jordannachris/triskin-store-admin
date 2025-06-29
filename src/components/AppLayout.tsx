import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
    return (
        <div>
            <p>Início do Layout</p>
            <Header />

            <main>
                <Outlet />
            </main>

            <p>Fim do Layout</p>
        </div>
    );
}

export default AppLayout;