//Completa la función que tomando dos números como argumento devuelva el más alto.

function highestNumber(numberA, numberB) {
    if (numberA>numberB) {
        console.log(numberA);
    }
    if (numberA<numberB) {
        console.log(numberB);
    }
    if (numberA===numberB) {
        console.log('Los dos números ',numberA,'y ',numberB,' son iguales.');
    }
}

highestNumber(1,10);
highestNumber(9,3);
highestNumber(5,5);