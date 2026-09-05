// Immediately Invoke Function Expressions (IIFE)

(function chai(){

    // named IIFE
    console.log('DB Connected'); 
})();

( (name) => {
    console.log(`DB Connected TWO ${name}`);
    
})('Ramu')