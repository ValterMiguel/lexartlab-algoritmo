const letterNumbers = [ "a", 10, "b", "hola", 122, 15];

/*Obtenha uma array contendo apenas as letras */
const letters = letterNumbers.filter((element) => {
    if (isNaN(element)) {
        return true;
    }
})
console.log(letters);


/*Obtenha uma array contendo apenas os números */
const numbers = letterNumbers.filter((element) => {
    if ( typeof element == 'number') {
        return true;
    }
})
console.log(numbers);


/*Obtenha o maior número da array acima */
const largeNumber = Math.max(...numbers)

console.log(largeNumber)








