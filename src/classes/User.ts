import { Base } from "./Base";
import { Product } from "./Produto";

export class User extends Base {
    public name: string;
    public username: string;
    public email: string;
    private cart: Product[]

    constructor(_id:string, name: string, username: string, email: string) {
        super(_id); 
        this.name = name;
        this.username = username;
        this.email = email;
        this.cart = [];
        
    }
    
    public addToCart(product:Product): void {
        //fazer um push
    }

    public removeFromCart(product: Product): void{

    }

    public showProducts(): string {

        return ""
    }


}


