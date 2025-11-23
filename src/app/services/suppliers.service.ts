import { HttpClient } from "@angular/common/http";
import { getUrl} from "../core/api.config";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class SuppliersService{

    private http = inject(HttpClient);

    getSuppliers(){
        return this.http.get(getUrl('suppliers'));
    }
}