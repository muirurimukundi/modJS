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



    // default parameters done by using an assignment operator
    console.log("Default Parameters")

    function mathy(num=10){
        console.log(num);
    }

    mathy()

    function logNinja(name="Jane", age = 24, belt = "red"){
        console.log("My name is ", name, "my age is ", age, "my belt color is ", belt);

    }

    logNinja('John', 31, 'black');
    logNinja() // if you don't have default parameters - it becomes undefined

    /*--------------------------------------------------------------------*/

    // spread operator used when you want to spread an array into its individual components 

    fruits = ['apples ','banananas ','oranges']   
    console.log("Now we consider the spread operator: aka alama ya dukuduku in es6")
    console.log("Jack went to the market and bought ", ...fruits) 

    function bringTogether(num1,num2,num3){
        console.log(num1,num2,num3)
    }

    // a function expecting 3 arguments, if they are inside an array the spread operator can be used

    scores = [91,73, 100]
    bringTogether(...scores)
    
    // tempate strings can allow you to format your strings , 
    // syntax is `` back ticks and ${} to embed an expression

    function greetMe(greeting, name, hometown, age){
        // without template strings
        console.log(greeting + " my name's " + name +" I come from "+ hometown+ " I am " + age + " years old");

        // with template strings
        // remember to include the $ if you ommit it it does not evalate the expression inside the curly braces
        console.log(`${greeting}, my name's ${name}, I come from ${hometown}, and I am ${20+14} years old `)
    }

    greetMe("Howdy", "Pearson", "Texas", 43);


    
}

