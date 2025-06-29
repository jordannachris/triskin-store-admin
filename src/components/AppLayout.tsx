import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";


const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main>
                {isLoading ? <Loader /> : <Outlet />}
            </main>
        </div>
    );
}

export default AppLayout;