function palindromo(string) {
    let verificaPalindromo = string.split('');
    let reverse = verificaPalindromo.reverse();
    let novaString = reverse.join('');
    if (novaString == string){
        return 'True'
   } return 'False'
}

const str = 'desenvolvimento'
console.log(palindromo(str));