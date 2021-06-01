export type ProductItemType = {
    id: number | null
    name: string
    img: string
    description: string
    rating: string | null
    reviews: Array<string | null>
}

export type ProductsType = {
    products: Array<ProductItemType>
}

export const fetchProducts = async (): Promise<ProductsType> => {
    const response = await fetch( 'https://demo6435853.mockable.io/products' )
    return await response.json();
};
