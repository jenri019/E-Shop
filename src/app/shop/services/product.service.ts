import { Injectable } from "@angular/core";
import { Product } from "src/app/models/product.interface";

@Injectable()

export class ProductService {

    private _products:Product[] = [
        {
            id:1223,
            name: "Televisor",
            price: 2500,
            inOffer: false,
            stock: 23,
            description: "¨This is a product",
            features: [
                {'color':'prasd'},
                {'color':'prasd'},
                {'color':'prasd'},
                {'color':'prasd'},
                {'color':'prasd'},
            ]
        }
    ];

    get products():Product[] {
        return [...this._products];
    }

    constructor(){}
}