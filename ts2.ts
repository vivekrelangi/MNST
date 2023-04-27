function Sum(x: number, y: number) : number {
    return x + y;
}

var s=Sum(2,3); // returns 5
console.log(s)

function Greet(name: string, subject?: string ) : string {
    return name+' '+subject;
}
console.log(Greet('PRASAD'))
console.log(Greet("PRASAD","MST"))

function Cse(name: string, subject: string="JAVA" ) : string {
    return name+' '+subject;
}
console.log(Cse('prasad'))
console.log(Cse('prasad','devops'))

function Cse12(name: string='PRASAD', subject: string ) : string {
    return name+' '+subject;
}
console.log(Cse12(undefined,'cloud'))
console.log(Cse12('siriha','c++'))

function Cserest(name: string, ...subjects: string[]) {
    return name + " " + subjects.join(", ") + "!";
}
console.log(Cserest("PRASAD", "PYTHON", "DEVOPS")); // returns PRASAD PYTHON, DEVOPS!
console.log(Cserest("PRASAD"));// PRASAD !