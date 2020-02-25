function calcOrDouble(number, basis) {
    // если второго аргумента нет то просто умножает на два
    // раньше делали так :
    basis = basis || 2 // если basis существует то basis = basis  иначе basis = 2
    console.log(number*basis) // что могло привести к ошибке
}
calcOrDouble(3,5);
calcOrDouble(6);

// Теперь как это делается в ES6 
function calcOrDouble(number, basis = 2) { // будет браться basis = 2 если его нет
    console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);