
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if(this.tipo === "mago"){
            ataque = "usou magia";
        }

        if(this.tipo === "guerreiro"){
            ataque = "usou espada";
        }

        if(this.tipo === "monge"){
            ataque = "usou artes marcias";
        }

        if(this.tipo === "ninja"){
            ataque = "usou shuriken";
        }

        return console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi = new Heroi("Haia", 23, "guerreiro");

heroi.atacar()