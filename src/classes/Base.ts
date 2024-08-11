// Classe que será somente para que as demais a herdem
//Classe base é caracteristicas que todos irão ter, para ter um contexto geral para a organização

import { randomUUID } from "crypto";

export abstract class Base {
    private _id: string;

    constructor(id: string) {        //gera um id automático a cada instância nova
        this._id = randomUUID()
    }
}