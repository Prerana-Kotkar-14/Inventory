import { Category } from "./Category.enum";
import { SupplierName } from "./SupplierName.enum";

export interface Item{
    id: number;
    itemName : string;
    price : number;
    category: Category;
    description: string;
    supplierName: SupplierName;
    createdAt:string;
    updatedAt:string;
}