import productActiveImage from "../assets/images/product_active.png"
import productInactiveImage from "../assets/images/product_inactive.png";

interface ProductInterface {
    id: string;
    name: string;
    price: number;
    status: boolean;
}

interface ProductItemProps {
    product: ProductInterface;
}

const imageStyle: React.CSSProperties = {
    width: 64,
    height: 64,
    objectFit: "contain" as React.CSSProperties["objectFit"],
    marginRight: 16
};

const containerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    border: "1px solid #ddd", // borda leve cinza
    borderRadius: "8px",      // cantos arredondados (opcional)
    padding: "12px",
     backgroundColor: "#faf6ee"
};


const ProductItem = ({ product }: ProductItemProps) => {
    // console.log("ProductItem:", product);

    const { name, price, status } = product;
    const statusText = status ? "Ativo" : "Inativo";
    const productImage = status ? productActiveImage : productInactiveImage;

    return (
        <li style={containerStyle}>
            <div>
                <img src={productImage} alt={name} style={imageStyle} />
            </div>

            <div>
                <p>Nome do produto: {name}</p>
                <p>Preço: R$ {price}</p>
                <p>Status: {statusText}</p>
            </div>
        </li>
    );
}

export default ProductItem;