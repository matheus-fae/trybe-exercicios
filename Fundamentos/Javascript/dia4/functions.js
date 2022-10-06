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
const arrayTeste = [2, 3, 6, 7, 10, 1];
console.log(maiorValor(arrayTeste));