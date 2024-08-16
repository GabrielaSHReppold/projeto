import { Product } from "./classes/Produto";
import { User } from "./classes/User";

const gabriela = new User("Gabi", "Gabriela Reppold","Gabriela", "gabriela@gmail.com");
const sapato = new Product ("_id", "sapato", 140);
const blusinha = new Product()

sapato.comment("Top", gabriela);
sapato.rate(2, gabriela);
sapato.show();
gabriela.addToCart(sapato);
gabriela.addToCart(blusinha);
gabriela.removeFromCart(sapato);

gabriela.showProducts()