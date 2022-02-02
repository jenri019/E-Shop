import { Injectable } from "@angular/core";
import { Product } from "src/app/models/product.interface";

@Injectable()

export class ProductService {

    private _products:Product[] = [
        {
            id:"1223",
            name: "Televisor",
            price: 2500,
            inOffer: false,
            stock: 0,
            description: "¨This is a TV",
            features: [
                {
                    color:'azul',
                    peso:'poco',
                    marca:'juan',
                    año:'2020',
                }
            ]
        },
        {
            id:"1233",
            name: "Computadora",
            price: 2500,
            inOffer: false,
            stock: 23,
            description: "¨This is a computer",
            features: [
                {
                    color:'verde',
                    peso:'11 kg',
                    marca:'chapulin',
                    año:'1996',
                }
            ]
        },
        {
            id:"1243",
            name: "Radio",
            price: 2500,
            inOffer: false,
            stock: 23,
            description: "¨This is a Radio",
            features: [
                {
                    color:'rojo',
                    peso:'mucho',
                    marca:'superpato',
                    año:'2021',
                    estado:'decente',
                    frecuencia:'alta',
                    longitud:'alta',
                    procesador:'apoco lleva?',
                }
            ]
        },
    ];

    private _selectedProduct:Product[] = [
        {
            id:"",
            name: "",
            price: 0,
            inOffer: false,
            stock: 0,
            description: "",
            features: [
                {
                    color:'0',
                    peso:'0',
                    marca:'0',
                    año:'0',
                }
            ]
        }
    ];

    get products():Product[] {
        return [...this._products];
    }

    get selectedProduct():Product[] {
        return [...this._selectedProduct];
    }

    setProductInfo(index:number){
        this._selectedProduct[0].id = this._products[index].id;
        this._selectedProduct[0].name = this._products[index].name;
        this._selectedProduct[0].price = this._products[index].price;
        this._selectedProduct[0].inOffer = this._products[index].inOffer;
        this._selectedProduct[0].stock = this._products[index].stock;
        this._selectedProduct[0].description = this._products[index].description;
        this._selectedProduct[0].features = this._products[index].features;
    }

    constructor(){}
}