function microondas(prato,tempo) {
    switch  (prato){
        case 1:
            console.log("Prato 1");
            tempopadrao = 10;
            console.log(tempopadrao);
            break;
        case 2:
            console.log("Prato 2");
            tempopadrao = 8;
            console.log(tempopadrao);
            break;
        case 3:
            console.log("Prato 3");
            tempopadrao = 15;
            console.log(tempopadrao);
            break;  
        case 4:
            console.log("Prato 4");
            tempopadrao = 12;
            console.log(tempopadrao);
            break;   
        case 5:
            console.log("Prato 5");
            tempopadrao = 8;
            console.log(tempopadrao);
            break;
        default:
            break;
    }
    console.log(tempo,tempopadrao,tempopadrao*2,tempopadrao*3);
    if (prato > 5) {console.log("Este prato nao existe")}
        else 
        if (tempo < tempopadrao) {console.log("Tempo insuficiente..Está CRU ainda...")}
        else
        if (tempo = tempopadrao) {console.log("Seu prato está pronto")}
        else 
        if ((tempo >= tempopadrao*2) && (tempo < tempopadrao*3)) {console.log("Seu prato queimou....")}
        else 
        if (tempo >= tempopadrao*3) {console.log("KABUMMMMM......")}
        else
        console.log("TEMPO IGNAORADO");

}

microondas(3,50)