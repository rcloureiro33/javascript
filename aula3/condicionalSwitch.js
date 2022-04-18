let idade =" ";

switch(idade){
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        console.log('acesso negado');
        break;
    case 18:
    case 19:    
    case 20:
    case 21:
        console.log("acesso permitido");
        break;
    default:
        console.log("Digite uma idade válida:")
}