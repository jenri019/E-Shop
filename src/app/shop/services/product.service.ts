import { Injectable } from "@angular/core";
import { Product } from "src/app/models/product.interface";

@Injectable()

export class ProductService {

    private _index:number = 0;
    private _products:Product[] = [
        {
            id:"1223",
            name: "Televisor",
            price: 2500,
            inOffer: false,
            stock: 23,
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

    get products():Product[] {
        return [...this._products];
    }

    get index():number{
        return this._index;
    }

    setIndice(index:number){
        this._index = index;
    }

    constructor(){}
}