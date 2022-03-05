/* 
Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
Puedes usar este array para probar tu función:
*/

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function counterWords(words) {
    let counter = {};

    words.forEach(element => {
        if (!counter.hasOwnProperty(element)) {
            counter[element] = 1;
        } else {
            counter[element]++;
        }
    });

    return counter;
}

console.log(counterWords(words));
