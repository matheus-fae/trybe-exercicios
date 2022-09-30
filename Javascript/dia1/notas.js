const nota = 0

if (nota >= 90 && nota <= 100){
    console.log('Parabéns você tirou A!');
} else if (nota >= 80 && nota < 90) {
    console.log('Muito bem, você tirou um B!');
} else if (nota >= 70 && nota < 80) {
    console.log('Vocẽ esta na média , tirou um C!');
} else if (nota >= 60 && nota < 70) {
    console.log('Precisa se esforçar um pouco mais , a sua nota foi um D!');
} else if (nota >= 50 && nota < 60) {
    console.log('Vocẽ ficou para recuperação! Sua nota foi um E!');
} else if (nota < 50 && nota >= 0) {
    console.log('Reprovado, sua nota foi F!');
} else {
    console.log('ERRO! nota invalida');
}