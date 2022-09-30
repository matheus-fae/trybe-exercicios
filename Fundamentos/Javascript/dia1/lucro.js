const custo = 50
const venda = 100

if (custo <= 0 | venda <= 0){
    console.log('ERRO! valor de venda ou custo menor que 0!');
} else {
    let valorCustoTotal = custo + (20/100 * custo)
    let lucro = venda - valorCustoTotal
    let lucroTotal = lucro * 1000
    console.log('O lucro ao vender 1000 produtos sera de: R$ ', lucroTotal);
}