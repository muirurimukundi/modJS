window.onload = function(){

    const pi = 3.142; 

    // pi = 10; does not work: error 
    console.log(pi);

    

    function calculateArea(r){

        const pi = 10; // normally you can't redeclare a constant but here you can create a local version of pi and it will be legal showing that
        // the scope is only local
        console.log(`The local pi is ${pi}`)
        console.log("The area is", pi * r * r);
    }

    
    calculateArea(5);
    console.log(`The global pi is ${pi}`)
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


    // object literals

    var name = "Crystal";
    var belt = "Black";

    // before exyntax
    var ninja = {
        name: name,
        belt: belt,

        chop: function(x){
            console.log(`You chopped the enemy ${x} times`);
        } // old syntax 
    };

    console.log(ninja.name, ninja.belt);

    // in es6: we don't need to define the value inside the object

    var ninja = {
        name, belt,
        chop(x){
            console.log("new syntax for functions");
            console.log(`You chopped the enemy ${x} times`);
        }
        
    }

    console.log("in es6")
    console.log(ninja.belt);
    console.log(ninja.chop(5));

    /**
     * New string methods in es6: repeat, startsWith, endsWith, includes
     */

    // repeat is used for repeating a string 

    let str = 'graaavy';

    console.log(str.repeat(5));

    let sentence = "goodbye";

    console.log("1. " + sentence.startsWith('good'));
    console.log("2. " + sentence.startsWith('bye'));
    console.log("3. " + sentence.endsWith('bye'));
    console.log("4. " + sentence.endsWith('bye', sentence.length - 3));


    let youSay = "goodbye";

    if (youSay.startsWith('goodbye')){
        var iSay = "hello";
    }

    console.log(`you say ${youSay}, I say ${iSay}`);

    // includes checks entire string to check if contains the characters you specify

    var test = "My name is Ryu";

    console.log(test.includes('name'));

    // arrow functions , previous syntax b4 arrow functions

    var ninjaSalute = function(name){
        console.log(`Niaje ${name}`);
    }

    ninjaSalute("Johnny");

    // arrow function syntax
    NinjaSalute = (name='Sam')=> console.log(`Vipi ${name}`);
    NinjaSalute("Emma");
    NinjaSalute(); // default argument works

    // we don't need the brackets around the function because it takes one argument alone, if they were more there would have been need
    NinjaGreet = greeting => console.log(`${greeting} sir/maddam - welcome home!`);
    NinjaGreet("Howdy");

    var ninja = {
        name: "Ryu",

        chop(x){
            window.setInterval(() => {
                if(x>0){
                    console.log(this.name+" chopped the enemy");
                    x--;
                }

            }, 1000)
        }
    };

    ninja.chop(5);

    // Sets hold unique values 
    var names = new Set();
    names.add("Shaun").add("Bella").add("Tobby");

    console.log(names);

    // trying to duplicate an entry
    names.add("Bella");

    // arrays have duplicates but sets don't they eliminate duplicates 
    // size of the set
    console.log("Set size:" + names.size);

    // Deleting elements in a set
    names.delete("Bella");
    console.log(names.size);

    names.clear(); // remove everything in the set 
    console.log(`contents of my set ${names} `)
    console.log(names.size)

    // check whether set has a certain element: returns a boolean
    console.log(names.has("Shaun"));
    names.add("biscuit").add("chocolate").add("candy").add("jawbreaker");
    console.log(names.has("candy"));
}

