const parOuImpar = (num1)=>{
    if (num1 % 2 === 0) {
        return `O numero ${num1} é Par!`
    } else {
        return `O numero ${num1} é Impar!`
    }
}

console.log(parOuImpar(9))
