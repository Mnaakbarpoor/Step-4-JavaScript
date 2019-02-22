
console.log( ' square of number');

let x = [1 , 2 , 3 , 4 , 5 , 100];

// for (let me = 1; me <= 100; me++) {
//     let y = [me*me ];
//     console.log(y)    
// }
for(let me =1; me <= 100; me++ ){
    console.log(`the square of ${me} is ${me * me}`)
}

console.log('sum of number')

sum = 0

// for (let i = 1; i <= 100; i++) {
//    let z = [i+1] ;
//     console.log(z)
// }

for(let i = 1; i <= 100; i++){
    console.log(`the sum of ${i} is ${i + 1}`)
}

// console.log('sum of square of odd number')

// for(let b = 1; b <= 100; b++){
//     let L = [2*b-1]*[2*b-1];
//     console.log(L)
// }

for(let b = 1; b <= 100; b+=2){
    sum += b*b
    
}
console.log(`the sum of the square of odd number is ${sum}`)

// console.log('sum of even of square number')

// for(let c = 1; c <= 100; c++){
//     let G = [2*c]*[2*c];
//     console.log(G)
// }

for(let c = 2; c <= 100; c+=2){
    sum += c*c
}
console.log(`the sum of the squares of even number is ${sum}`)


