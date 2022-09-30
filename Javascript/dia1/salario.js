const salarioBruto = 3000;
if (salarioBruto < 1556.94) {
    let descontoInss = (salarioBruto / 100) * 8;
    let salarioLiquido = salarioBruto - descontoInss;
} else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
    descontoInss = (salarioBruto / 100) * 9;
    salarioLiquido = salarioBruto - descontoInss;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoInss = (salarioBruto / 100) * 11;
    salarioLiquido = salarioBruto - descontoInss;
} else if (salarioBruto > 5189.52) {
    const aliquotaMax = 570.88
    salarioLiquido = salarioBruto - aliquotaMax;
}

if (salarioLiquido <= 1903.98) {
    console.log(`Salario final: R$ ${salarioFinal} ISENTO DE IR`);
} else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    let descontoImpostoRenda = (salarioLiquido / 100) * 7.5;
    let parcelaImpostoRenda =  descontoImpostoRenda - 142.80;
    let salarioFinal = salarioLiquido - parcelaImpostoRenda;
    console.log(`Salario final: R$ ${salarioFinal} com desconto de Imposto de Renda`);
} else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
    descontoImpostoRenda = (salarioLiquido / 100) * 15;
    parcelaImpostoRenda = descontoImpostoRenda - 354.80;
    salarioFinal = salarioLiquido - parcelaImpostoRenda;
    console.log(`Salario final: R$ ${salarioFinal} com desconto de Imposto de Renda`);
} else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
    descontoImpostoRenda = (salarioLiquido / 100) * 22.5;
    parcelaImpostoRenda = descontoImpostoRenda - 636.13;
    salarioFinal = salarioLiquido - parcelaImpostoRenda;
    console.log(`Salario final: R$ ${salarioFinal} com desconto de Imposto de Renda`);
} else if (salarioLiquido > 4664.68 ) {
    descontoImpostoRenda = (salarioLiquido / 100) * 27.5;
    parcelaImpostoRenda = descontoImpostoRenda - 869.36;
    salarioFinal = salarioLiquido - parcelaImpostoRenda;
    console.log(`Salario final: R$ ${salarioFinal} com desconto de Imposto de Renda`);
} 