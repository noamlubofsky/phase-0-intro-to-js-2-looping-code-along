// Code your solutions in this file

function writeCards(names, event) {
    let myArray = []
    for (let i = 0; i < names.length; i++) {
        myArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
return myArray
}

function countDown(number) {
    let loop = number
    while (loop >= 0) {
        console.log(loop--);
    }
}