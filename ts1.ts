console.log("Welcome to mean stack from cse from acoe, surampalem");
var a:Number=123;
console.log(a)
var Name:string = "DURGA PRASAD"; 
var Dept:string = "CSE"; 

// Pre-ES6 
var employeeDesc1: string = Name + " works in the " + Dept + " department."; 

// Post-ES6 
var employeeDesc2: string = `${Name} works in the ${Dept} department.`; 

console.log(employeeDesc1);
console.log(employeeDesc2); 

enum Skills2 {
	MST="YDP",
	Devops="VVP",
	Cloud="Pawan",
	Java="Kalyan",
	Python=1000
}

console.log(Skills2['Python']);

enum fees2 {
	MST=1000,
	Devops=2000,
	Cloud=3000,
	Java=4000,
	Python=5000
}

console.log(fees2[2000]);

var fruits: string[] = ['Apple', 'Orange', 'Banana']; 
// fruits[0]; // returns Apple
// fruits[1]; // returns Orange
// fruits[2]; // returns Banana
// fruits[3]; // returns undefined

//fruits.push('mango')

for(var index in fruits)
{ 
    console.log(fruits[index]);  // output: Apple Orange Banana
}

const manufacturers3: any[] = [{ id: 'Samsung', checked: false },
        { id: 'Motorola', checked: false },
        { id: 'Apple', checked: false },
        { id: 'Sony', checked: false }
    ];

console.log('Available Products are: ');

 // logic to populate the above declared array's id value
for (const item of manufacturers3) {

     console.log(item.id);
}