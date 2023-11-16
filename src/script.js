let classificaPartida = rodar(79, 17);

function rodar(quantidadeVitorias, quantidadeDerrotas){
    let resultadoMediaPartidas = calcularMediaPartida(quantidadeVitorias, quantidadeDerrotas);
    let verificaNivelPartida = verificarNivelPartida(resultadoMediaPartidas);

    return `O herói tem de saldo de ${resultadoMediaPartidas} e está no nível de ${verificaNivelPartida}`;
}

function calcularMediaPartida(quantidadeVitorias, quantidadeDerrotas){
    return quantidadeVitorias - quantidadeDerrotas;
}

function verificarNivelPartida(resultadoMediaPartidas){
    let nivelPartida;

    if(resultadoMediaPartidas < 10){
        nivelPartida = "Ferro";
    }else if(resultadoMediaPartidas >= 11 && resultadoMediaPartidas <= 20){
        nivelPartida = "Bronze";
    }else if(resultadoMediaPartidas >= 21 && resultadoMediaPartidas <= 50){
        nivelPartida = "Prata";
    }else if(resultadoMediaPartidas >= 51 && resultadoMediaPartidas <= 80){
        nivelPartida = "Ouro";
    }else if(resultadoMediaPartidas >= 81 && resultadoMediaPartidas <= 90){
        nivelPartida = "Diamante";
    }else if(resultadoMediaPartidas >= 91 && resultadoMediaPartidas <= 100){
        nivelPartida = "Lendário";
    }else if(resultadoMediaPartidas >= 101){
        nivelPartida = "Imortal";
    }else{
        nivelPartida = "Partida não pôde ser encontrada, tente novamente."
    }

    return nivelPartida;
}

console.log(classificaPartida);