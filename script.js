Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {            
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


//10,000_______________________________________________________________________

/* [Running] node "c:\Users\Pili\OneDrive\Documentos\GitHub\CuantoTiempoTomo\script.js"
The 10,000th prime number is 104729
This took 93304.90499997139 milliseconds to run

[Done] exited with code=0 in 93.591 seconds */

//100,000______________________________________________________________________

/* [Running] node "c:\Users\Pili\OneDrive\Documentos\GitHub\CuantoTiempoTomo\script.js"
The 10,000th prime number is 104729
This took 96224.19060003757 milliseconds to run

[Done] exited with code=0 in 96.454 seconds */

//1,000,000____________________________________________________________________

/* [Running] node "c:\Users\Pili\OneDrive\Documentos\GitHub\CuantoTiempoTomo\script.js"
The 10,000th prime number is 104729
This took 97668.59389996529 milliseconds to run

[Done] exited with code=0 in 97.964 seconds */

//10,000 tomó 93 seg 
//100,000 tomó 96 seg
//1,000,000 tomó 97 seg

_______________________________________________________________________________

// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);
    
// no me sale :(_______________________________________________________________

//Invertir una cadena

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);

//Otra forma de hacer una función reversed
const reversed2 = (story)=>{
        let newText = "";
        for(let i=story.length-1; i>0; i--){
            newText+=story[i];
        }
        return newText;
}
console.log(reversed2(story));