// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

function removeDuplicates(list) {
    let original = [];
    for (let i = 0; i < list.length; i++) {
        if (!original.includes(list[i])) {
                original.push(list[i]);
        }
    }
    console.log(original);
    return original;
}

removeDuplicates(duplicates);
