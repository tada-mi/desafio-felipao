
// Definindo a classe herói
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


// Exibindo informações da classe herói
    atacar(){
        let ataque;
        if (this.tipo === "mago"){
        ataque = "magia";
        }else if(this.tipo === "guerreiro"){
        ataque = "espada";
        }else if(this.tipo === "monge") {
        ataque = "artes marciais";
        }else if(this.tipo === "ninja") {
        ataque = "shuriken";
        }else {
        ataque = "ataque desconhecido";
        }
        return ataque;
    }

    // Exibindo informações
    exibirInformacoes(){
            console.log(`O ${this.tipo} atacou usando ${this.atacar()}`);
    }
}

// Criando instâncias da classe heroi
const heroi1 = new heroi("Ricardo", 29, "guerreiro");
const heroi2 = new heroi("Michelle", 31, "mago");
const heroi3 = new heroi("Miriam", 59, "monge");
const heroi4 = new heroi("Geovana", 15, "ninja");

// Exibindo informações dos heróis
heroi1.exibirInformacoes();
heroi2.exibirInformacoes();
heroi3.exibirInformacoes();
heroi4.exibirInformacoes();