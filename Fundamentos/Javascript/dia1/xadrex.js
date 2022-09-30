const peca = 'BISPO'.toLowerCase()


switch (peca){
    case 'peao':
        console.log('Somente pode andar uma casa para frente!')
        break;
    case 'torre':
        console.log('Anda quantas casas quiser na horizontal ou na vertical');  
        break;
    case 'cavalo':
        console.log('Faz movimentos em L');
        break;
    case 'rei':
        console.log('Pode se mover para qualquer casa adjacente'); 
        break;
    case 'rainha':
        console.log('Anda quantas casas quiser tanto na horizontal , vertical e diagonal!')  
        break;
    case 'bispo':
        console.log('Anda quantas casas quiser porem somente na diagonal');
        break;
    default:
        console.log('ERRO PEÇA NAO EXISTE!');
}