let array = ['java', 'javascript', 'python', 'html', 'css'];
let comparaString = '';
let maior = 0;

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior) {
        maior = array[i].length;
        comparaString = array[i];
    }
}
