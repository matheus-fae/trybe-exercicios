let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorString = '';
let menor = array[0].length;

for (let i = 0; i < array.length; i += 1) {

    if (array[i].length < menor){

        menor = array[i].length;
        menorString = array[i];
        
    }

}
