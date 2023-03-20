export class CD { // export permet de dire a une classe qu'elle est accessible depuis l'exterieur
    id!:number; // "!" dit que la variable est obligatoire
    title!:string;
    author!:string;
    price!:number;
    thumbnail!:string;
    dateDeSortie!:Date;
    quantite!:number;
    onsale?:boolean; // "?" dit que la variable est optionnelle

    constructor(title:string, author:string, price:number, thumbnail:string, dateDeSortie:Date, quantite:number, onsale?:boolean) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.thumbnail = thumbnail;
        this.dateDeSortie = dateDeSortie;
        this.quantite = quantite;
        if (onsale != undefined) {
            this.onsale = onsale;
        }
    }
}
