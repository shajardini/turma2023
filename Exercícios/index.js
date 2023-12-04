const average = (...numbers)=>{
    const sum = numbers.reduce((accum, num)=> accum + num, 0)
    return sum / numbers.length
}

console.log(`Média aritmética simples: ${average(3,6,9,1)}`)

const mediaPonderada = (...entries)=>{
    const sum = entries.reduce((accum, {number, weight})=> accum + (number * weight), 0)
    const weightSum = entries.reduce((acum, entry) => acum + entry.weight, 0)
    return sum / weightSum
}

console.log(`Média Ponderada: ${mediaPonderada(
    { number: 9, weight: 3 },
    { number: 7, weight: 1 },
    { number: 10, weight: 1 },
  )}`)



const median = (...numbers)=>{
    const orderedNumbers = [...numbers].sort((a,b)=>a-b)
    const middle = Math.floor(orderedNumbers.length/2)
    if(orderedNumbers.length % 2 !== 0){
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle-1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers)=>{
    const quantidades = numbers.map(num =>[
        num, 
        numbers.filter(n => num ===n).length
    ])
    quantidades.sort((a, b)=> b[1] - a[1])
    return quantidades[0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
