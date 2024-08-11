import { Base } from "./Base";
import { Product } from "./Produto";
import { User } from "./User";

export type Rate = 0 | 1 | 2 | 3 | 4 | 5;

export class Rating extends Base {
    
    public rate: Rate;
    private _product: Product;
    private _user: User;

    constructor(rate: Rate, _product: Product, _user: User){
        super();
        this.rate = rate;
        this._product = _product; 
        this._user = _user;  
    }
}
