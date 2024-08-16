import { Base } from "./Base";
import { Product } from "./Produto";

export class User extends Base {
    public name: string;
    public username: string;
    public email: string;
    private _cart: Product[] 

    constructor(_id:string, name: string, username: string, email: string) {
        super(_id); 
        this.name = name;
        this.username = username;
        this.email = email;
        this._cart = [];
        
    }
    
    public addToCart(product:Product): void {
        this._cart.push(product);
        console.log (product.name + "adicionado ao carrinho.");
    }

    public removeFromCart(product: Product): void{
        const index = this._cart.findIndex((item) => item === product)
        if (index === -1) {
            console.log(product.name + "Não está no carrinho.")
        } else {
            console.log(product.name + "excluído com sucesso.");
            this._cart.splice(index, 1); 
        }
    }

    public showProducts(): string {
        const somaProdutos = this._cart.reduce((prev, acc) => prev + acc.value, 0);
        const dadosMapeados = this._cart. map((product) => `${product.name}`). join(",");
        console.log(`Carrinho : \n ${dadosMapeados} \n total do carrinho: ${somaProdutos}`);
        return "";
    }
}


