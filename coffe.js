const doYouHaveCoffe = (max, min) => {
    const coffeLvl = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(coffeLvl >= 50 ? "Tem café" : "Não tem café");
    return console.log(coffeLvl); 
}

const listGood = [
    "Vai trabalhar legal",
    "Good trabalhos hoje hein",
    "Hoje eu vou voar de tanto trabalhar",
    "A produtividade tá como? Lá em cima!",
    "Hoje é dia de meter marcha no trampo!",
    "O foguete não tem ré, bora trabalhar!",
    "Cheguei no modo turbo, ninguém me segura!",
    "O café bateu forte, agora só paro amanhã!",
    "Teclado cantando hoje, hein!",
    "Vapo vapo no trabalho, sem tempo irmão!",
    "Vou estourar de tanto trabalhar hoje!",
    "Te prepara que hoje eu sou só entrega!",
    "O chefe vai até me pedir calma hoje!",
    "Hoje eu tô tipo programador sênior!",
    "Sem pausas, só código voando na tela!",
    "Meta do dia: bater todas as metas!",
    "O código hoje vai fluir como água!",
    "Já acordei pensando no deploy de sucesso!",
    "Hoje eu sou a definição de produtividade!",
    "Vou resolver bug antes dele aparecer!",
    "Ninguém segura meu foco hoje!",
    "A mente tá afiada, só vem task!",
    "Se piscar, já finalizei mais um projeto!",
    "A energia tá monstra, vou entregar tudo!",
    "O trabalho tá fluindo como nunca!",
    "Hoje eu sou 100% eficiência!",
    "Tô trabalhando tão rápido que já tô no futuro!",
    "Café na mão, código na tela, produtividade a milhão!",
    "Parece que acordei com superpoderes de dev!",
    "Modo ultra instinto ativado no trabalho!"
];

const listBad = [
    "Meu ovo, hoje é surf",
    "Sem trabalho",
    "Hoje tá barril",
    "Nem café salva esse dia",
    "A produtividade foi viajar e não voltou",
    "Modo tartaruga ativado",
    "Hoje eu sou só presença no trabalho",
    "Se depender de mim, o mundo para hoje",
    "A motivação tá no negativo",
    "A única coisa que eu quero entregar é meu sono",
    "O trabalho que lute, porque eu não tô lutando",
    "Hoje eu sou espectador da minha própria vida",
    "Zero vontade de abrir o computador",
    "Sei nem porque liguei o PC",
    "O máximo que eu faço hoje é respirar",
    "O código que se vire sozinho",
    "Se eu entregar algo hoje, foi sem querer",
    "Hoje eu tô igual um comentário de código: inútil",
    "Não conte comigo pra nada",
    "Até um computador desligado trabalha mais que eu hoje",
    "Só marcando presença, sem nenhuma entrega",
    "Hoje eu sou a definição de preguiça",
    "A produtividade pulou essa terça-feira",
    "O café tentou me animar, mas desistiu no meio do caminho",
    "O que eu produzi hoje? Nada e nem vou",
    "O foco tá igual Wi-Fi ruim, caindo toda hora",
    "Se eu abrir o VS Code hoje, já é vitória",
    "A única coisa que eu tô rodando é paciência",
    "A entrega de hoje é só desmotivação",
    "Se depender de mim, nem erro de sintaxe aparece"
];

const phrases = (coffeLvl) => {
    if (coffeLvl >= 50) {
        const randomIndex = Math.floor(Math.random() * listGood.length);
        console.log(listGood[randomIndex]);
    } else {
        const randomIndex = Math.floor(Math.random() * listBad.length);
        console.log(listBad[randomIndex]);
    }
}

const coffeLvl = doYouHaveCoffe(0, 100);
phrases(coffeLvl);
