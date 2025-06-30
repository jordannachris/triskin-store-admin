import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-fuchsia-900 via-fuchsia-600 to-violet-700 font-semibold text-white p-7 min-h-24 uppercase flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="tracking-widest">Triskin Store Admin</Link>

            <CartIcon />
        </header>
    );
}

export default Header;