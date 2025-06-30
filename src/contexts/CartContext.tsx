import { createContext, useContext, useState, ReactNode } from "react";

type Cart = Record<string, number>;

interface CartContextProps {
    cart: Cart;
    addToCart: (id: string) => void;
    setProductQuantity: (id: string, quantity: number) => void;
    totalCount: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Cart>({});

    const addToCart = (id: string) => {
        setCart(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const setProductQuantity = (id: string, quantity: number) => {
        setCart(prev => {
            // Remove o produto se a quantidade for 0 ou menor
            if (!quantity || quantity <= 0) {
                const newCart = { ...prev };
                delete newCart[id];
                return newCart;
            }
            // Atualiza a quantidade normalmente
            return { ...prev, [id]: quantity };
        });
    };

    const totalCount = Object.values(cart).reduce((sum, n) => sum + n, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, setProductQuantity, totalCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
};