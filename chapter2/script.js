// strings

console.log("Hello, world");

let email = "masalacollective@gmail.com";
console.log(email);


// string concatenation

let firstName = "Mark";
let lastName = "Sanderson";

let fullName = firstName + lastName; // with no spacing 
console.log(fullName);

console.log(firstName + " " + lastName);

// extracting characters 

let initials = firstName[0] + " " + lastName[0];
console.log(initials); 


// string length 

console.log(fullName.length);

// string methods

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

let index = email.indexOf('@')
console.log(index);

let result = email.lastIndexOf('o');
console.log(result)

// slicing 

let domain = 'www.masalacollective.com';

console.log(domain.indexOf('.'));
console.log(domain.lastIndexOf('e'));
console.log(domain.lastIndexOf('.'));

let businessName = domain.slice(4,20);
console.log(businessName);

result = domain.substr(0,3);
console.log(result);

result = domain.replace('m','w');
console.log(result)
console.log(domain)
