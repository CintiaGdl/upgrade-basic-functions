// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(list) {
    let suma = 0;
    for (let i = 0; i < list.length; i++) {
        if (typeof (list[i]) === 'string') {
            suma += list[i].length;
        }
        if (typeof (list[i]) === 'number') {
            suma += list[i];
        }
    }
    console.log(suma);
} 
averageWord(mixedElements);

