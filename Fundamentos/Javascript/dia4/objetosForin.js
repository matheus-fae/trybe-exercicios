let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  let infoDois = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O ultimo mac patinhas',
    recorrente: 'Sim'
  };

  console.log(`Bem-vinda, ${info.personagem}`);
  console.log(info);

  for (let key in info) {
    console.log(key);
  }

  for (key in info) {
    console.log(info[key]);
  }

  for (key in info) {
    if (info[key] === infoDois[key]) {
        console.log('Ambos recorrentes');
    } else {
        console.log(`${info[key]} e ${infoDois[key]}`);
    }
  }