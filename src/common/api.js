export const fetchProducts = async () => {
    const response = await fetch( 'https://demo6435853.mockable.io/products' )
    return await response.json();
};
