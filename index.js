// crie uma variavel para armazenar o nome e a quantidade de XP de um heroi

let nomeHeroi = "Mikasa"
let qtdXP = 6000
let nivelHeroi = ""

// opção com if else

if(qtdXP <= 1000){
    nivelHeroi = "Ferro";
}else if(qtdXP >= 1001 && qtdXP <= 2000){nivelHeroi = "Bronze"
}else if(qtdXP >= 2001 && qtdXP <= 5000){nivelHeroi = "Prata"
}else if(qtdXP >= 5001 && qtdXP <= 7000){nivelHeroi = "Ouro"
}else if(qtdXP >= 7001 && qtdXP <= 8000){nivelHeroi = "Platina"    
}else if(qtdXP >= 8001 && qtdXP <= 9000){nivelHeroi = "Ascendente"
}else if(qtdXP >= 9001 && qtdXP <= 10000){nivelHeroi = "Imortal"        
}else{nivelHeroi = "Radiante"}

// opção com switch case

switch (true){
    case (qtdXP <= 1000):
        nivelHeroi = "Ferro"
    break    

    case (qtdXP >= 1001 && qtdXP <= 2000):
        nivelHeroi = "Bronze"
    break

    case (qtdXP >= 2001 && qtdXP <= 5000):
        nivelHeroi = "Prata"
    break

    case (qtdXP >= 5001 && qtdXP <= 7000):
        nivelHeroi = "Ouro"
    break

    case (qtdXP >= 7001 && qtdXP <= 8000):
        nivelHeroi = "Platina"
    break

    case (qtdXP >= 8001 && qtdXP <= 9000):
        nivelHeroi = "Ascendente"
    break

    case (qtdXP >= 9001 && qtdXP <= 10000):
        nivelHeroi = "Imortal"
    break

    default:
        nivelHeroi = "Radiante"
}

console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)