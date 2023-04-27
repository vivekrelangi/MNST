console.log("Welcome to mean stack from cse from acoe, surampalem");
var a = 123;
console.log(a);
var Name = "DURGA PRASAD";
var Dept = "CSE";
// Pre-ES6 
var employeeDesc1 = Name + " works in the " + Dept + " department.";
// Post-ES6 
var employeeDesc2 = "".concat(Name, " works in the ").concat(Dept, " department.");
console.log(employeeDesc1);
console.log(employeeDesc2);
var Skills2;
(function (Skills2) {
    Skills2["MST"] = "YDP";
    Skills2["Devops"] = "VVP";
    Skills2["Cloud"] = "Pawan";
    Skills2["Java"] = "Kalyan";
    Skills2[Skills2["Python"] = 1000] = "Python";
})(Skills2 || (Skills2 = {}));
console.log(Skills2['Python']);
var fees2;
(function (fees2) {
    fees2[fees2["MST"] = 1000] = "MST";
    fees2[fees2["Devops"] = 2000] = "Devops";
    fees2[fees2["Cloud"] = 3000] = "Cloud";
    fees2[fees2["Java"] = 4000] = "Java";
    fees2[fees2["Python"] = 5000] = "Python";
})(fees2 || (fees2 = {}));
console.log(fees2[2000]);
var fruits = ['Apple', 'Orange', 'Banana'];
// fruits[0]; // returns Apple
// fruits[1]; // returns Orange
// fruits[2]; // returns Banana
// fruits[3]; // returns undefined
//fruits.push('mango')
for (var index in fruits) {
    console.log(fruits[index]); // output: Apple Orange Banana
}
var manufacturers3 = [{ id: 'Samsung', checked: false },
    { id: 'Motorola', checked: false },
    { id: 'Apple', checked: false },
    { id: 'Sony', checked: false }
];
console.log('Available Products are: ');
// logic to populate the above declared array's id value
for (var _i = 0, manufacturers3_1 = manufacturers3; _i < manufacturers3_1.length; _i++) {
    var item = manufacturers3_1[_i];
    console.log(item.id);
}
