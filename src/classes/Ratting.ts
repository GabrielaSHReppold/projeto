import { Base } from "./Base";
import { Product } from "./Produto";
import { User } from "./User";

export type Rate = 0 | 1 | 2 | 3 | 4 | 5;

export class Ratting extends Base {
    
    public rate: Rate;
    private _product: Product;
    private _user: User;

    constructor(rate: Rate, product: Product, user: User){
        super();
        this.rate = rate;
        this._product = product; 
        this._user = user;  
    }

    public get product() : Product {
        return this._product
    }
}
