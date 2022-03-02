/* Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const avengers2 = ['Hulk', 'Thor', 'IronMan', 'Spiderman', 'Captain M.'];

function longestElement (array) {
    
    let longestLength = 0;
    let longestLengthpositionArray = 0;
    for (let positionArray = 0; positionArray < array.length; positionArray++) {
        const element = array[positionArray];
        if (longestLength < element.length) {
            longestLength = element.length;
            longestLengthpositionArray = positionArray;
        }
    }

    return array[longestLengthpositionArray];
}

console.log(longestElement(avengers));