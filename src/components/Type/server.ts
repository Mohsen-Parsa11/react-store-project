export interface IProduct{
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: IProductsRating
}

export interface IProductsRating{
    rate: number,
    count: number
}