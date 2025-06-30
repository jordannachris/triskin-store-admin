export interface ProductInfoProps {
    productName: string;
    productPrice: string;
    productStatus: string;
}

const ProductInfo = ({ productName, productPrice, productStatus }: ProductInfoProps) => {
    return (
        <div className="ml-2 w-full">
            <p className="break-words max-w-full">
                <span className="font-semibold text-fuchsia-800">Nome do produto:</span>
                <span className="text-violet-900 ml-1">{productName}</span>
            </p>
            <p className="break-words max-w-full">
                <span className="font-semibold text-fuchsia-800">Preço:</span>
                <span className="text-violet-900 ml-1">R$ {productPrice}</span>
            </p>
            <p className="break-words max-w-full">
                <span className="font-semibold text-fuchsia-800">Status:</span>
                <span className="text-violet-900 ml-1">{productStatus}</span>
            </p>
        </div>
    );
};

export default ProductInfo;