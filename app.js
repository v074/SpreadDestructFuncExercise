// 1a. Create a const variable named jPDinos and set the value of the variable to the following array items "Velociraptors", "Tyrannosaurus Rex", and "Dilophosaurus"
const jPDinos=["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];

// 1b. Create a function called seeDinos. Create the function so that when the function is run the following will display in the terminal/console. It will need to display "Velociraptor" on one line and on the next line display an array with "Tyrannosaurus Rex" and "Dilophosaurus" as items inside the array. Also, you must run the function and are required to use both SPREAD and REST to complete this question (AKA 1b).
function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);

// 2a. Create a const variable called jPCharacters and set the value to an object with the following key value pairs (alanGrant: "Sam Neill"), (ellieSattler: "Laura Dern"), and (ianMalcolm: "Jeff Goldblum")
const jpCharacters={
    alanGrant:"Sam Neill",
    ellieSattler:"Laura Dern",
    ianMalcolm:"Jeff Goldblum"
};
// 2b. Create a function called seeCharacters. Create the function so that when the function is run only "Laura Dern" will display in the terminal/console. Also, you must run the function and are required to use DESTRUCTURING to complete this question (AKA 2b).
function seeCharacters({ellieSattler}){
    console.log(ellieSattler);
}
seeCharacters(jpCharacters);

// 3a. Create a const variable named jurassicParkMovies and set the value to an array of two objects. Use the following keys and values for each object in the array: Key value pairs for the 1st object are (one: "Jurassic Park", two: "The Lost World: Jurassic Park", and three: "Jurassic Park III"). Key value pairs for the 2nd object are (four: "Jurassic World" and five: "Jurassic World: Fallen Kingdom"). (NOTE: I would suggest using some copy and paste on this one.)
const jurassicParkMovies=[
    {one:"Jurassic Park", two:"The Lost World:Jurassic Park", three:"Jurassic Park III"},
    {four:"Jurassic World", five:"Jurassic World:Fallen Kingdom"}
];

// 3b. Create a function called seeJPMovies. Having only the following inside the opening and closing curly brackets of the seeJPMovies function (See below), have all five movie names display in the terminal/console when the function is run (HINT: There are at least two ways this can be done)...
//  console.log(one);
//  console.log(two);
//  console.log(three);
//  console.log(four);
//  console.log(five);

function seeJPMovies({one, two, three},{four, five}){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
}

seeJPMovies(...jurassicParkMovies);