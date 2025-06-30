import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import HeaderHome from "./HeaderHome";


const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    const isHomePage = location.pathname === "/";

    return (
        <div className="flex flex-col min-h-screen">
            {isHomePage ? <HeaderHome /> : <Header />}

            <main>
                {isLoading ? <Loader /> : <Outlet />}
            </main>
        </div>
    );
}

export default AppLayout;