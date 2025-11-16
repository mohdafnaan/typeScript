// assigning  a function in typescript

function addTwo(num){ // here num takes"any" as the data type
    console.log(num + 2); 
}
addTwo(3);  // this is the normal function  which we declare

function addTwo1(num){ 
    console.log(num + 2); 
}
addTwo1("4");// the problem is if we give a string it still runs


// fixes

function addTwo2(num : number){  // if we give the type as number
    console.log(num + 2); 
}
addTwo2("asf"); // we cant place any other data type in the arguments.


function addtwo3(value:string) {
    console.log(value);
}
addtwo3("afnaan");


function signUpUser(name : string, email : string , phoneNumber : number , isPaid : boolean){
    console.log(`NAME :  ${name}`);
    console.log(`EMAIL : ${email}`);
    console.log(`PHONE : ${phoneNumber}`);
    console.log(`IS PAID : ${isPaid}`);
}
signUpUser("mohammed afnaan", "mohdafnaan833@gmail.com", 9573503729, false);