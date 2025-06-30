export interface ProductInfoProps {
    productName: string;
    productPrice: string;
    productStatus?: string;
    productQuantity?: number;
    isCart?: boolean;
}

const ProductInfo = ({
    productName,
    productPrice,
    productStatus,
    productQuantity,
    isCart = false,
}: ProductInfoProps) => {
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
            {isCart ? (
                <p className="break-words max-w-full">
                    <span className="font-semibold text-fuchsia-800">Quantidade:</span>
                    <span className="text-violet-900 ml-1">{productQuantity}</span>
                </p>
            ) : (
                <p className="break-words max-w-full">
                    <span className="font-semibold text-fuchsia-800">Status:</span>
                    <span className="text-violet-900 ml-1">{productStatus}</span>
                </p>
            )}
        </div>
    );
};

export default ProductInfo;