// Immediately Invoked Function Expressions (IIFE)

(function chai(){

    // named IIFE
    
    console.log(`DB connected`);
})();


// globe scope ke pollution k hatane ke liye

// (function aurocode() {
//     console.log(`db connected two`);

// })()


( (name) => {
    console.log(`DB connected TWO ${name}`);
}) (`amit`)