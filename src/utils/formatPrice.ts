const formatPrice = (price: number | string): string => {
  const num = typeof price === "number" ? price : Number(price);  
  return num.toFixed(2).replace('.', ',');
};

export default formatPrice;