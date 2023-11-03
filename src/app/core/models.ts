import { ICard, IProducts, IUser } from "./interfaces";

export class Product implements IProducts{
    id: number | null;
    title: string | null;
    description: string | null;
    price: number | null;
    brand: string | null;
    category: string | null;
    thumbnail: string | null;
    images: string[] | null;

    constructor(product?: any){
        this.id = product.id != null ? product.id: null;
        this.title = product.title != null ? product.title: null;
        this.description = product.description != null ? product.description: null;
        this.price = product.price != null ? product.price: null;
        this.brand = product.brand != null ? product.brand: null;
        this.category = product.category != null ? product.category: null;
        this.thumbnail = product.thumbnail != null ? product.thumbnail: null;
        this.images = product.images != null ? product.images: null;
    }
    
}

export class Card implements ICard{
    number: number | null;
    security_code: number | null;
    expiration: string | null;
    
    constructor(card?: any){
        this.number = card.number != null ? card.number: null;
        this.security_code = card.security_code != null ? card.security_code: null;
        this.expiration = card.expiration != null ? card.expiration: null;
    }
}

export class User implements IUser{
    id: number | null;
    name: string | null;
    lastName: string | null;
    mail: string | null;
    password: string | null;
    province: string | null;
    city: string | null;
    street: number | null;
    dni: number | null;
    card: Card[] | null;
    cart: Product[] | null;

    constructor(user?: any){
        this.id = user.id != null ? user.id: null;
        this.name = user.name != null ? user.name: null;
        this.lastName = user.lastName != null ? user.lastName: null;
        this.mail = user.mail != null ? user.mail: null;
        this.password = user.password != null ? user.password: null;
        this.province = user.province != null ? user.province: null;
        this.city = user.city != null ? user.city: null;
        this.street = user.street != null ? user.street: null;
        this.dni = user.dni != null ? user.dni: null;
        this.card = user.card != null ? user.card: null;
        this.cart = user.cart != null ? user.cart: null;
    }
    
}