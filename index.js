// let firstName = "Rohit "
// let secondName = "sourav"
// console.log(firstName)
// console.log(secondName)

// const users = ["Rohit","Sourav","asdasd"]
// console.log(users[3])

// let sum = 10+5; 
// console.log(sum)
// let age = 18; 
// let canVote = (age>18);
// console.log(canVote)

// function greet(name){
//     return "Hello "+name;
// }
// function sum(a,b){
//     return a+b;
// }
// function canVote(age){
//     if(age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(greet("sourav"))
// console.log(sum(23,32))
// console.log(canVote(17))


// let user = {
//     name:{
//         rohit:{
//             age:18
//         }
//     },
//     age:21
// }
// console.log(user.name.rohit.age)
// function greet(user){
// let gen = "Mr"
// let eligible ="eligible"
//     if(user.gender =="Male"){
//         gen="Mr"
//     }
//     if(user.gender == "Female"){
//         gen="Ms"
//     }
//     if(user.gender == "Other"){
//         gen="Others"
//     }
//     if(user.age <18){
//         eligible  ="not eligible"
//     }
//     return "Hello "+gen +" "+ user.name +" and your age is "+user.age +" and you are "+eligible+" to vote";
// }
// let user = {
//     name:"Rohit",
//     age:17,
//     gender:"Male",
// }
// console.log(greet(user))
function checker(user){
    for(let i = 0; i<user.length;i++){
        if(user[i].age>18 && user[i].gender=="Male"){
            console.log(user[i].name+" is eligible to vote")
        }
        
    }
}
const user = [
    {
        name:"Rohit",
        age:21,
        gender:"Male"
    },
    {
        name:"Sourav",
        age:20,
        gender:"Female"
    }
]

checker(user)