export interface Product{
    productId:number;
    name: string;
    images:string[];
    categoryId: number;
    price: number;
    stock:number;
    active: boolean;
    category:string; 
}