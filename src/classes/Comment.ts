import { Base } from "./Base" ;
import { Product } from "./Produto";
import { User } from "./User";

export class Comment extends Base {
    public content: string;
    private _product: Product;
    private _from: User;

    constructor(_id: string, content: string, _product: Product, from: User){
        super(_id);
        this.content = content;
        this._product = _product;
        this._from = from;
    }

    public get product(): Product {
        return this._product
    }

    public get from(): User {
        return this._from;
    }
}