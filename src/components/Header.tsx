import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-fuchsia-800 text-white p-4">
            <header>
                <Link to="/">Triskin Store Admin</Link>
            </header>
        </div>
    );
}

export default Header;