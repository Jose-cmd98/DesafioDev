export interface Product {
    id?: number //opcional
    name: string
    price: number | null,
    photo?: string,
    localStorage?: boolean,
}
