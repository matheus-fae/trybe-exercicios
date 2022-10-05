let maior = 0;

for (let i = 2; i <= 50; i += 1) {
    let total = 0;
    
    for (let j = 1; j <= i; j += 1) {
        if (i % j == 0) {
            total += 1
        }
    }

    if(total == 2 && i > maior){
        maior = i;
    }
}

console.log(`maior número primo entre 2 e 50: ${maior}`)