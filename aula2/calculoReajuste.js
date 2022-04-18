function reajusteSalarial(salario, reajustePercentual){
    reajuste = (salario * reajustePercentual)/100;
    console.log(salario);
    console.log(reajuste);
    console.log(salario + reajuste);
}
reajusteSalarial(1000,7);
reajusteSalarial(2252, 8);
reajusteSalarial(1352, 5);
