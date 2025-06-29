import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <p>HEADER AQUI</p>
            <header>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Ir para Home Page</Link>
            </header>
        </>
    );
}

export default Header;