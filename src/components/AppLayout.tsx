import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";


const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div>
            <p>Início do Layout</p>
            {/* {isLoading && <Loader />} */}

            <Header />

            <main>
                {/* <Outlet /> */}
                {isLoading ? <Loader /> : <Outlet />}
            </main>

            <p>Fim do Layout</p>
        </div>
    );
}

export default AppLayout;