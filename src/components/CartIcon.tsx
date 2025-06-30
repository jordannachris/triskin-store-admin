import { Link } from "react-router-dom";
import cartIcon from "../assets/images/cart_icon.svg";

const CartIcon = () => {
    return (
        <Link to="/cart" className="mt-3 md:mt-0 block">
            <img
                src={cartIcon}
                alt="Carrinho"
                className="w-14 h-12"
                draggable={false}
            />
        </Link>
    );

};

export default CartIcon;