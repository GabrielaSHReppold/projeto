import { Base } from "./Base";
import { Comment } from "./Comment";
import { User } from "./User";
import { Rate, Ratting } from "./Ratting"; 
import { rattings } from "../db/rattings";
import { comments } from "../db/comments";
import { Console } from "console";


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

    private _showDetails(): void {
        // mostrar o produto

        console.log(`${this.name} (R$ ${this.value})`);

        //mostrar a média de avaliações

        const avaliacoes = rattings.filter(ratting => ratting.product === this);
        if (avaliacoes.length !== 0) {

            const somaAvaliacoes = avaliacoes.reduce((prev, atual) => prev + atual.rate, 0);

        //Dividir pelo número total as avaliações

        const mediavaliações = somaAvaliacoes / avaliacoes.length;

        //Mostar no log
        Console.log(`A média das avaliações é de  ${mediavaliações.toFixed(1)}.`)
        }
        else {
            console.log("Nao existe avaliações")
        }

        //mostrar todos os comentários

        const comentarios = comments.filter(comentario => comentario.product === this)

        comentarios.forEach(element => {
            console.log(`[${element.user.userName}]: ${element.content}`);

            return""
        });

        //Calça preta (R$ 300)
        //Avaliação média: 4.5 |
        //[Bruna]: Muito bonita, preço bom.
        //[Dafne]: Ficou grande


        /* const productComments = comment.filter(comment => comment.product._id === this._id);
        let detalhes = `Detalhes do Produto ${this.name}:\n`;

        productComments.forEach(comment => {
            detalhes += `Comentário: ${comment.content} - Usuário: ${comment.user.name}\n`;
        });



        return detalhes; */
    }

    public comment(content: string, user: User): void {   

        const comment = new Comment(content, content, this, user);
        comments.push(comment);
    }

    public rate(rate: Rate, user: User): void {
        
        const ratting = new Ratting(rate, this, user);
        ratting.push(ratting);
    }
}
