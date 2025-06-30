import { Link } from "react-router-dom";
import cartIcon from "../assets/images/cart_icon.svg";

interface CartIconProps {
    count?: number;
}

const CartIcon = ({ count = 0 }: CartIconProps) => {
    return (
        <Link to="/cart" className="mt-3 md:mt-0 block relative">
            <img
                src={cartIcon}
                alt="Carrinho"
                className="w-14 h-12"
                draggable={false}
            />
            <span
                className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-fuchsia-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white pointer-events-none"
                style={{ minWidth: "1.5rem", minHeight: "1.5rem" }}
            >
                {count}
            </span>
        </Link>
    );

};

export default CartIcon;