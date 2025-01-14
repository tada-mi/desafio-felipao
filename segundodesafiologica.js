let vitorias = 71
let derrotas = 50

function indicarNivelHeroi(vitorias, derrotas){
    if(saldoRankeadas < 10){
        return "Ferro"
    }   else if(saldoRankeadas <= 20){
        return "Bronze"        
    }else if(saldoRankeadas <=50){
        return "Prata"        
    }else if(saldoRankeadas <=80){
        return "Ouro"
    }else if(saldoRankeadas <=90){
        return "Diamante"
    }else if(saldoRankeadas <=100){
        return  "Lendário"
    }else{
        return "Imortal"
    }
}

let saldoRankeadas = vitorias - derrotas
let nivelHeroi = indicarNivelHeroi(vitorias, derrotas)

console.log("O herói tem saldo de " + saldoRankeadas + " e está no nível de " + nivelHeroi)