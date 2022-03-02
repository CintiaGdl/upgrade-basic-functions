// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(list) {
    let suma = 0;
    for (let i = 0; i < list.length; i++) {
        suma += list[i];
    }
    console.log(suma / list.length);
}

average(numbers);