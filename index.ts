//Javeriya Yasin - 17/May/2024 (adding comments because of Task-10)
//Question 1 :Installation of  Node.js, TypeScript and VS Code
//Question 2: using Print command
let personName= "Eric"
console.log("Hello "+personName+ ",would you like to learn some Python today?")
console.log("//-------------------------------3------------------------------------------------");
//Question 3: Case changing
console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
console.log("Titlecase: " + personName.replace(/\b\w/g, (char) => char.toUpperCase()));
console.log("//--------------------------------4----------------------------------------------");
//Question 4: Quote printing
const quote: string = "The best among you are those who have the best manners and character.";
const author: string = "Prophet Muhammad (PBUH)";
console.log(`${author} once said, "${quote}"`);
console.log("//--------------------------------5-----------------------------------------------");
//Question 5: Famous Quote 
const quote1: string = "The best among you are those who have the best manners and character.";
const famous_person: string = "Prophet Muhammad (PBUH)";
const message: string = `${famous_person} once said, "${quote1}"`;
console.log(message);
console.log("//---------------------------------6----------------------------------------------");
//Question 6: use of \t \n and stripped
const nameWithWhitespace: string = "\t\n   Javeriya Yasin   \n\t";
console.log("Name with whitespace:");
console.log(nameWithWhitespace);
const strippedName: string = nameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log(strippedName);
console.log("//----------------------------------7---------------------------------------------");
//Question 7 +-*/ to get 8 using variables
let n1:number = 6; let n2:number = 2;
console.log("Addition:"+n1+ "+" +n2+ " = "+(n1+n2));
let n3:number = 10; 
console.log("Subtraction:"+n3+ " - "+n2+ " = "+(n3-n2));
let n4:number = 4; 
console.log("Multilpication:"+n4+ " * "+n2+ " = "+(n4*n2));
let n5:number = 16; 
console.log("Division:"+n5+ " / "+n2+ " = "+(n5/n2));
console.log("//-----------------------------------8--------------------------------------------");
//Question 8 +-*/ to get 8
console.log("Addition: 6 + 2 =", 6 + 2);
console.log("Subtraction: 16 - 8 =", 16 - 8);
console.log("Multiplication: 4 * 2 =", 4 * 2);
console.log("Division: 16 / 2 =", 16 / 2);
//Question 9: favorite number
console.log("//-----------------------------------9--------------------------------------------");
const favoriteNumber:number= 2;
console.log("My Favorite Number is :"+favoriteNumber);
//Question 10:  Adding comments
console.log("//-----------------------------------10--------------------------------------------");
console.log("Task is to add comments");
//Question 11 Friends Names
console.log("//-----------------------------------11--------------------------------------------");
const friendsnames: string[] = ["I", "Me", "Myself"];
friendsnames.forEach(friendsnames => {
    console.log(friendsnames);
});
//Question 12 Hello to each friend
console.log("//-----------------------------------12--------------------------------------------");
friendsnames.forEach(friendsnames => {
    console.log("Hello " +friendsnames+ " Have a great Day! ");
});
//Question 13 Array of tranportaion
console.log("//-----------------------------------13--------------------------------------------");
const modeOfTransport: string[] = ["Toyota Hillux 4x4", "Motorbike", "Bicycle"];
modeOfTransport.forEach(modeOfTransport => {
    console.log("I would like to own a "+modeOfTransport);
});
//Question 14 Guest List
console.log("//-----------------------------------14--------------------------------------------");
const guestList: string[] = ["Mother", "Sister", "Brother"];

guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner. Please let me know if you can make it.`);
});
//Question 15 Change in Guest List changing in arrayin 14 to use in 15
console.log("//-----------------------------------15--------------------------------------------");
let guests: string[] = ["Mother", "Sister", "Myself"];

// Print invitation messages
function printInvitationMessages(guests: string[]) {
    for (let guest of guests) {
        console.log(`Dear ${guest}, you are invited to dinner. Please let me know if you can make it!`);
    }
}
printInvitationMessages(guests);
// Modify the list
let unableToAttend = 'Myself';
let newGuest = 'Brother';
guests = guests.filter(guest => guest !== unableToAttend);
guests.push(newGuest);
// Print second set of invitation messages
console.log("\nAfter changes:")
printInvitationMessages(guests);

//Question 16 add new guest remove the one who doesnt mean
console.log("//-----------------------------------16--------------------------------------------");

// Modify the list
let anotherNewGuest = 'Father';

// Remove guest who can't attend and add new guest to the middle
guests = guests.filter(guest => guest !== unableToAttend);
guests.splice(Math.floor(guests.length / 2), 0, newGuest);

// Add another new guest to the end
guests.push(anotherNewGuest);

// Print second set of invitation messages
console.log("\nAfter changes:")
printInvitationMessages(guests);

//Question 17 pop out people
console.log("//-----------------------------------17--------------------------------------------");
// Remove guests one at a time until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`\nSorry, ${removedGuest}, I can't invite you to dinner.`);
}
// Print final invitation messages
console.log(`\nFinal guests list:`);
printInvitationMessages(guests);

//Question 18
console.log("//-----------------------------------18--------------------------------------------");
let placesToVisit: string[] = ['Makkah', 'Medina', 'Turkey', 'Canada', 'Switzerland'];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order after alphabetical sorting:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order after reverse alphabetical sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array to change it to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);


//Question 19 print the no of guests
console.log("//-----------------------------------19--------------------------------------------");
// Print the total number of guests invited
console.log(`\nYou are inviting ${guests.length} people to dinner.`);
//Question 20 list of mountains, rivers, place, cities
console.log("//-----------------------------------20--------------------------------------------");
let things: string[] = ['Wah Cantt', 'K2', 'AnsuLake', 'Joyland'];

// a list of mountains, rivers, place, cities
console.log("List ", things);
//Question 21 
console.log("//-----------------------------------21--------------------------------------------");
// Define the items
const item1 = "Apple";
const item2 = 25;
const item3 = true;

// Create an object
const myObject = {
  item1: item1,
  item2: item2,
  item3: item3,
};
// Print the object
console.log(myObject);
//Question 22
console.log("//-----------------------------------22--------------------------------------------");
//intentional error:Redefining
//let things: string[] = ['Wah Cantt', 'K2', 'AnsuLake', 'Joyland'];
//Question 23
console.log("//-----------------------------------23--------------------------------------------");
let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru');

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

console.log("Is car.length < 10? I predict True.");
console.log(car.length < 10);
//Question 24
console.log("//-----------------------------------24--------------------------------------------");
let age:number =20;
let numbers:number[] =[3,6,9,12,16];

//string test
console.log("Is car == 'sabaru'? I predict True")
console.log(car == 'sabaru'); //true 
console.log("Is car != 'sabaru'? I predict False")
console.log(car == 'sabaru'); //false
//lower test function
console.log("Is car.toLoweerCase() == 'sabaru'? I predict True")
console.log(car.toLocaleLowerCase() == 'sabaru'); //true
console.log("Is car.toLoweerCase() == 'toyota'? I predict False")
console.log(car.toLocaleLowerCase() == 'toyota'); //false
//numerical test
console.log("Is age == 20? I predict True")
console.log(age == 20); //true
console.log("Is age != 25? I predict True")
console.log(age != 25);
//greater , less than
console.log("Is age >18? I predict True")
console.log(age >18); //true
console.log("Is age <18? I predict False")
console.log(age <18); 
// And or test
console.log("Is 10< age < 25? I predict True")
console.log(age>10 && age < 25); //true
console.log("Is age <5 or age <15? I predict False")
console.log(age>10 || age < 25); 

//Question 25
console.log("//-----------------------------------25--------------------------------------------");
export let alien_color:string="green";

if(alien_color==="green"){
    console.log("Player just earn 5 points")
}
//Question 26
//console.log("//-----------------------------------26--------------------------------------------");
else if(alien_color!="green"){
    console.log("Player just earn 10 points")
}
else{

}
//Question 27
console.log("//-----------------------------------27--------------------------------------------");
let alien_color1="red";

if(alien_color1==="green"){
    //  change color 
    console.log( "\u001b[1;32m Player just earn 5 points" );
    
    
}
else if(alien_color1==="red")
{
    console.log( "\u001b[1;31m Player just earn 15 points " );

}

else if(alien_color1==="yellow"){
    console.log( "\u001b[1;33m Player just earn 10 points" );
    
}
else{

}
//  default Foreground color

console.log( "\u001b[0m " );
//Question 28
console.log("//-----------------------------------28--------------------------------------------");
//  stage of life 


let person_age:number=24;


if(person_age<2)
{
    console.log("Person is Baby")
}
else if(person_age>=2 && person_age<4)
{
    console.log("person is a toddler.")
}
else if (person_age>=4 && person_age<13)
{
    console.log("person is a kid.")
}
else if(person_age>=13 && person_age<20)
{
    console.log("person is a teenager.")
}
else if(person_age>=20 && person_age<65)
{
    console.log("person is an adult.")
}

else {
    console.log("person is an elder.")
}
//Question 29
console.log("//-----------------------------------29--------------------------------------------");
let favorite_fruits:string[]=["apple", "orange", "banana"];
let favorite_fruits2:string[]=["pongrate", "peer", "grapes"];

console.log(favorite_fruits);

if(favorite_fruits[0]==="peer")
{
console.log(`You dont like ${favorite_fruits[0]}`)
}
else if(favorite_fruits[1]==="grapes")
{
    console.log(`You dont like ${favorite_fruits[1]}`)

}
else if(favorite_fruits[2]==="banana")
{
    console.log(`You like this ${favorite_fruits[2]}`)

}

else{
    console.log(`You dont like any fruits`)
    
}
//Question 30
console.log("//-----------------------------------30--------------------------------------------");
const usernames:Array<string>=["guest","administrator","user","root","admin"]


//  for of loops return values  => for in loops return indexes
for(const i of usernames)
{
if(i==="admin")
{
console.log(`Hello ${i}, would you like to see a status report?`)
break;
}
else{
    continue; // not print this message
    console.log(`Hello ${i}, thank you for logging in again.`)

}
}
//Question 31
console.log("//-----------------------------------31--------------------------------------------");
const all_users:Array<string>=["guest","administrator","user","root","admin"]

// console.log(all_users.splice(0, all_users.length))
// console.log(all_users)
if(!all_users.length){
    console.log("We Need to find some user")
    }

    else{

//  pop method
let i=all_users.length;
while(i>0){
    all_users.pop();
    i--;
    
}
 }

//  remove all usernames from the array and print message 
    console.log("Your username not exist in aarray"+all_users)

    // if(all_users.length===0){
// console.log("We Need to find some user")
// }
//Question 32
console.log("//-----------------------------------32--------------------------------------------");
const current_users:Array<string>=["guest","administrator","user","root","admin"]

let new_users:string[]=[...current_users];
//  only 5 users copy 




console.log(new_users);
//  one user also add in list of current users
current_users.push("stduser")



for(let i=0; i<new_users.length; i++)
{
    
if(new_users[i]==="guest" && new_users[i]==="GUEST"||
new_users[i]==="administrator"&& new_users[i]==="ADMINISTRATOR"||
new_users[i]==="user" && new_users[i]==="USER"||
new_users[i]==="root" && new_users[i]==="ROOT"||
new_users[i]==="admin"&& new_users[i]==="ADMIN"
){

    console.log("username already exist enter new username")
    
}
else {
    console.log("username available")
}
}



//  other method 



for(let i=0; i<new_users.length; i++)
{
    
if(new_users[i].includes(new_users[i].toLowerCase())||new_users[i].includes(new_users[i].toUpperCase())){

    console.log("username already exist enter new username")
   
}
else {
    continue;
    console.log("username available")
}
}
//Question 33
console.log("//-----------------------------------33--------------------------------------------");
let ordinal_number:number[]=[1,2,3,4,5,6,7,8,9,];
 let suffix:string[]=new Array(9).fill("th");


 console.log(ordinal_number.join("th\t"))
console.log("----------------------------")
//   by loop 
for(let i=0; i<ordinal_number.length;i++){

    if(ordinal_number[i]>0 && ordinal_number[i]<10)
    
    console.log(`${ordinal_number[i]}th`);
}
//Question 34
console.log("//-----------------------------------34--------------------------------------------");
const pizza_names:Array<string>=["Greek Pizza","Detroit Pizza","Neapolitan Pizza"] 
//  print names of pizza list
pizza_names.map((value)=>(console.log(value)))

const pizza_list= pizza_names.map((value)=>(value=="Greek Pizza" ?`i like ${value}` :value))
console.log(pizza_list);

console.log("🍕 How Much you Like pizza 🍕 ");
console.log("You like Greek pizza 🍕 ");
console.log("I really love pizza 🍕❤️");
//Question 35
console.log("//-----------------------------------35--------------------------------------------");
let animals= new Array<string>(3);
 animals=["bats","whales","hamsters"]

for(let i of animals)
{
    //  print names of animals
    console.log(i)
if(i=="hamsters")
{
    console.log(`A hamsters would make great pet`)
}

}
//  common chareacteristics 
console.log("\nAlmost all mammals give birth to live babies.\nThey are endothermic, or warm-blooded.")
console.log(`${animals[0]} ${animals[1]} ${animals[2]} these animals would make great pet`)
//Question 36
console.log("//-----------------------------------36--------------------------------------------");
let T_shirt= function (size:number,message:string):string{
    return `${message} size no ${size}`
}

// function call 
console.log(T_shirt(12,"Pain Is Weakness Leaving The Body shirt"))
//Question 37
console.log("//-----------------------------------37--------------------------------------------");
(function (medium_size=10,large_size=20,message="I Love Typescript" ){

    console.log(`Shirt size meadium ${medium_size} `)
    console.log(`Shirt large size ${large_size} finally ${message}`)
    })()
//Question 38
console.log("//-----------------------------------38--------------------------------------------");
//  one default country value but one is not default
function describe_city(city1:string,city2:string,city3:string,country1:string,country2 :string="Saudia Arabia"){

    console.log(`${city1} city in ${country1}`)
    console.log(`${city3} city in ${country2}`)
    console.log(`${city2} not city in ${country2}`)
    
    }
    
    describe_city("Karachi","Lahore","jedda","Pakistan");
//Question 39
console.log("//-----------------------------------39--------------------------------------------");
function city_country (city1:string,city2:string,city3:string,country1:string){

    
    return `${city1} ${country1}`
    }

    //  first call 
    const citynames=city_country("Lahore","Sahiwal","Karachi","Pakistan")
    console.log(citynames);
   //  second call 
   console.log(city_country("Jeddah","Madina","Taif","Saudia Arabia")) 

//Question 40
console.log("//-----------------------------------40--------------------------------------------");
//  object creation 
let album1={
    artist_name:"Rocky",
    album_title:"KGF2"

}

let album2={
    artist_name:"Salman Khan",
    album_title:"Tiger zinda h ",
   
}


function make_album(obj:{artist_name:string,album_title:string},track_number:any){
    track(track_number)
    return `${obj.artist_name}\t${obj.album_title}`;
}

// another function 
function track(n:number){
    console.log(`number of tracks ${n}`)
}

console.log(make_album(album1,5))
 console.log(make_album(album2,7))
//Question 41
console.log("//-----------------------------------41--------------------------------------------");
let magician_name:string []=["Merlin","Teller","Ricky"]

//  rest parameter 
let show_magicians=function(...magician:string[]){
for(var i=0;i<magician.length;i++)
{
console.log(magician[i])
}

}

show_magicians("Merlin","Teller","Ricky")

export {magician_name};
//Question 42
console.log("//-----------------------------------42--------------------------------------------");

let greeting:any[];

function make_greet(greet_name:string[]){
     greeting = greet_name.map((value)=>(
        `Greet ${value}`
    ))
return greeting
}



console.log(make_greet(magician_name))

export {greeting}

//Question 43
console.log("//-----------------------------------43--------------------------------------------");
const greet:string[]=Array(3)
greet.fill("greet")
const m_names:string[]= ["Merlin","Teller","Ricky"]
function show_magicians1(){

   const addtwo= m_names.map((value,index)=>(
        `${value}  ${greet[index]}  `
    ))
    return addtwo
}

console.log(show_magicians1())
//Question 44
console.log("//-----------------------------------44--------------------------------------------");
let sandwitch:string[]=["egg sandwitch","chicken sandwitch","seafood sandwitch"];

const sandwitchlist=function(...list:string[]):string[]{
    return list.sort();
}

console.log(`${sandwitchlist(...sandwitch)}`);
console.log(sandwitchlist("seafood sandwitch","roast beef sandwitch","ham sandwitch"))
console.log(sandwitchlist("Nutella Sandwich","Grilled Chicken Sandwich"))

//Question 45
console.log("//-----------------------------------45--------------------------------------------");
interface Car {
    car_name: string,
    car_number: number;
  }

  let car_object:Car={
    car_name:"Cultus",
    car_number:1685
  }


  function greetin(car_object: { color: string,brand: string }):string {
    return `Hello   ${car_object.color} \t ${car_object.brand}` ;
  }

  console.log(`${car_object.car_name} \t ${car_object.car_number}`)

  console.log(greetin({color:"white",brand:"Honda"}))
  