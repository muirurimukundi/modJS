window.onload = function(){

    const pi = 3.142; 

    // pi = 10; does not work: error 
    console.log(pi);

    

    function calculateArea(r){

        const pi = 10; // normally you can't redeclare a constant but here you can create a local version of pi and it will be legal showing that
        // the scope is only local
        console.log("The area is", pi * r * r);
    }

    
    calculateArea(5);
    console.log("Global pi is", pi); // uses the global pi thus its 3.142

}