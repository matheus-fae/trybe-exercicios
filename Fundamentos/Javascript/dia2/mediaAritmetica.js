// DECLARAÇÃO DE VARIAVEIS

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maior = 0;
let impar = 0;
let menor = 500000;
let verificaMenor = 0;
let segundoArr = [];
let contador = 0;

// VERIFICA A MEDIA ARITMETICA DO ARRAY

for (let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i];
}

media = soma / numbers.length;

console.log(`A media é de ${media}`);

// IMPRIME UM VALOR SE O MESMO FOR MAIOR OU MENOR QUE 20

if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor que 20');
}

// VERFICA O MAIOR ELEMENTO DE UMA ARRAY

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i]
    }
}

console.log(`O maior valor é ${maior}`);

// VERIFICA SE HÁ IMPARES NO ARRAY

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        impar += 1;
    }
}


if (impar == 0) {
    console.log('Não existe numeros impares no array');
} else {
    console.log(`${impar} são impares`);
}

// VERIFICA MENOR VALOR NO ARRAY

for (i = 0; i < numbers.length; i += 1) {

    verificaMenor = numbers;

    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}


console.log(menor);

// CRIAR ARRAY QUE VA ATE 25

for (i = 1; i <= 25; i += 1) {
    segundoArr.push(i);
    console.log(i);
}

// UTILIZANDO ARRAY ANTERIOR IMPRIME O RESULTADO DA DIVISAO DOS ELEMENTOS POR 2

for (i = 1; i < segundoArr.length; i += 1) {
    divisao = segundoArr[i] / 2;
    segundoArr[i] = divisao;
}

console.log(segundoArr);
