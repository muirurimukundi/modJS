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


    /*----------------------------------------------------------------*/
    // Let has local scope / lexical scope - 


    var x = 10; 

    if (x > 5){
    var x = 5;
    }

    console.log("Value of x is ", x) 

    var y = 20;

    if (y > 5){
        let y = 10;
        console.log("Inside scope created by {}, the value of y is", y)
    }

    console.log("Inside outer scope the value of y is ", y)
    console.log("Notice we created the variable with var but changed it locally with let.")


    var items = document.getElementsByTagName("li");
    console.log(items)

    for(var b=0; b < items.length; b++){

        items[b].onclick=function(){
            console.log(b);
        }
    }

    // it will log out 4 because var is created in the global scope , creating a global variable 
    // remember you have to click to notice the console logs]
    
    var newitems = document.getElementsByTagName('li');
    console.log('Newitems: ', newitems);

    for(let y=0; y<newitems.length; y++){
        
        newitems[y].onclick=function(){
            console.log(y);
        }
    }


}