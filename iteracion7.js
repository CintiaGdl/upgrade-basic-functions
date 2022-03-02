/* 
Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. P
uedes usar este array para probar tu función:
*/

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
function finderName(list, name) {
    let result = false;
    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
        if (list[i] === name) {
            console.log(i);
            result = true;
        }
        else {
            console.log(false);
            result = false;
        }

    }
    return result;
}

finderName(nameFinder, 'Xabier');
