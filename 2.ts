// data types in ts : 
/* 
1. number
2. string
3. boolean 
4. null
5. undefined
6. void
7. object
8. array
9. tuples
10. any 
11. never
12. unkown 
*/

//   syntax for letting a varaiable:

let greet : string = "hello afnaan";   // we have to declare the datatype before giving the value.

console.log(greet);

let num : number = 1243;
 
num = "afnaan"; // we cant  update the value of the variable in diff type other than what we gave

console.log(num); // but the code runs and gives the value as "afnaan".

//---------------------------------------------------------------------
let isloggedin : boolean = true;  // the data type given is boolean 

isloggedin = 324 // it gives error line to variable coz we changed the datatype.

console.log(isloggedin); // output we get is 324.

//----------------------------------------------------------------------------------

// any  : we can declare or redeclare the value of the variable with any data type.

let number : any = 894734;

number = "chnaged into string if we add any data type with any "
console.log(number);