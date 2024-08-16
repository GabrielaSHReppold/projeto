import { Comment } from "../classes/Comment";
import { User } from "../classes/User";
import { Product } from "../classes/Produto";

// Precisamos observar que a letra maiuscula, sera sempre uma class um type. 
// Já em minuscula é pq ela é uma váriavel
export const comments: Comment[] = [];

public get product() : Product {
    return this._product
}

public get User(): User {
    return this._fromUser
}