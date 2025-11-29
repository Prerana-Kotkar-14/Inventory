export interface CreateItemRequest{
    itemName:string;
    price:number;
    category:string;
    supplierName:string;
    description?:string;
}