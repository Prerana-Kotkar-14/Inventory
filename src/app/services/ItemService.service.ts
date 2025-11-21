import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { getUrl } from "../core/api.config";
import { Item } from "../model/items.model";

@Injectable({
    providedIn: 'root'
})

export class ItemService {
    private http = inject(HttpClient);

    getAllItems()
    {
        return this.http.get<Item[]>(getUrl('items'));
    }
}