export interface ProductImageProps {
    productImage: string;
    productName: string;
}

const ProductImage = ({ productImage, productName }: ProductImageProps) => {
    return (
        <div className="w-16 h-16 mx-4 flex-shrink-0 mb-4 sm:mb-0">
            <img src={productImage} alt={productName} className="object-contain w-full h-full" />
        </div>
    );
};

export default ProductImage;