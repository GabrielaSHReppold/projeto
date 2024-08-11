import { comments } from "../../db/comments";
import { Base } from "./Base";
import { Comment } from "./Comment";
import { User } from "./User";
import { Rating } from "./Ratting"; 

export class Product extends Base {
    public name: string;
    public value: number;

    constructor(_id: string, name: string, value: number) {
        super(_id);
        this.name = name;
        this.value = value;
    }

    public show(): string {
        // A ideia é mostrar um produto e o _showDetails vai mostrar os comentários e raters
        const resposta = `Produto: ${this.name}, Valor: R$ ${this.value}`;
        console.log(resposta);
        console.log("\n-----------------------------\n");
        return resposta;
    }

    private _showDetails(): string {

        const productComments = comments.filter(comment => comment.product._id === this._id);
        let detalhes = `Detalhes do Produto ${this.name}:\n`;

        productComments.forEach(comment => {
            detalhes += `Comentário: ${comment.content} - Usuário: ${comment.user.name}\n`;
        });



        return detalhes;
    }

    public comment(content: string, user: User): void {   

        const comment = new Comment(content, this, user);
        comments.push(comment);
    }

    public rate(rate: number, user: User): void {
        
        const rating = new Rating(rate, this, user);

    }
}
