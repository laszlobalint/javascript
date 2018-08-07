// Boolean
let isDone: boolean = false; 

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;

// Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10];
console.log(x[0].substr(1));
console.log(x[0].toString());

// Enum
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
let colorName: string = Color[2];
alert(colorName);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed(); 
let list: any[] = [1, true, "free"];
list[1] = 100;

// Void
function warnUser(): void {
  alert("This is my warning message");
}
let unusable: void = undefined;

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Object
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let otherValue: any = "this is a string";
let otherLength: number = (someValue as string).length;
