function palindromo(string) {
    let verificaPalindromo = string.split('');
    let reverse = verificaPalindromo.reverse();
    let novaString = reverse.join('');
    if (novaString == string){
        return 'True'
   } return 'False'
}

const str = 'arara'
console.log(palindromo(str));

function maiorValor(array) {
    let maior = 0;
    let indice = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] >  maior) {    
            maior = array[i];
            indice = i;
        }
    }
    return indice;
}
const arrayMaiorValor = [2, 3, 6, 7, 10, 1];
console.log(maiorValor(arrayMaiorValor));

function menorValor(array) {
    let menor = array[0];
    let indice = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < menor) {
            menor = array[i]
            indice = i;
        }
    }
    return indice;
}

const arrayMenorValor = [2, 4, 6, 7, 10, 0, -3];
console.log(menorValor(arrayMenorValor));

function maiorString(array) {
    let maior = 0;
    let resultado = '';
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > maior){
            maior = array[i].length;
            resultado = array[i];
        }
    }
    return resultado;
}

const arrayStrings = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorString(arrayStrings));

function numeroRepetido(array) {
    let maisRepetido = 0;

    for (let index = 0; index < array.length; index += 1) {
        let vezesRepetido = 0;
        let numRepetido = array[index];

        for (let i = 0; i < array.length; i += 1) {
            if (numRepetido == array[i]) {
                vezesRepetido += 1;
            }

            if (vezesRepetido > maisRepetido) {
                maisRepetido = array[index]
            }
        }

    }

    return `numero mais repetido: ${maisRepetido}`
}

let numeros = [2, 3, 2, 5, 8, 2, 3];
console.log(numeroRepetido(numeros))

