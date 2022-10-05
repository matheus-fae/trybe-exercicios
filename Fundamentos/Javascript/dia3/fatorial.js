/* O FATORIAL DE 10 
    10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 
*/
const fatorial = [];
let i = 10;
let multiplica = 1;
let soma = 0;

for (i; i >= 1; i -= 1) {
    fatorial.push(i)
}

for (i = 0; i < fatorial.length; i += 1) {
    multiplica = multiplica * fatorial[i];
}