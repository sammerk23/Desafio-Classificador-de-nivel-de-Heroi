let nome = "Heroi Desconhecido";
let exp = 100;

for (let i = 0; i < 1; i++){
    if (exp <= 1000) {
        console.log("O Herói de nome "+ nome +" está no nível de Ferro");

    } else if (exp > 1000 && exp <= 2000) {
        console.log("O Herói de nome "+ nome +" está no nível de Bronze");

    } else if (exp > 2000 && exp <= 5000) {
        console.log("O Herói de nome "+ nome +" está no nível de Prata");

    } else if (exp > 5000 && exp <= 7000) {
        console.log("O Herói de nome "+ nome +" está no nível de Ouro");

    } else if (exp > 7000 && exp <= 8000) {
        console.log("O Herói de nome "+ nome +" está no nível de Platina");

    } else if (exp > 8000 && exp <= 9000) {
        console.log("O Herói de nome "+ nome +" está no nível de Ascendente");

    } else if (exp > 9000 && exp <= 10000) {
        console.log("O Herói de nome "+ nome +" está no nível de Imortal");

    } else {
        console.log("O Herói de nome '"+ nome +"' está no nível de Radiante");
    }
}

