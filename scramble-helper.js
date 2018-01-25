// Practice Section!
// Arrays
function arrays() {
    let greeting = 'howdy';
    let splitGreeting = greeting.split("");
    let length = splitGreeting.length;
    let selector1 = Math.floor(Math.random() * (length));
    let selector2 = Math.floor(Math.random() * (length));
    let temp = splitGreeting[selector1];
    splitGreeting[selector1] = splitGreeting[selector2];
    splitGreeting[selector2] = temp;
    let joinedGreeting = splitGreeting.join('');
    console.log(`${joinedGreeting}`);
}

//Maps
function maps(){
    let candy = new Map();
    candy.set('red', 'cherry');
    candy.set('orange','orange');
    candy.set('yellow','lemon');
    candy.set('green', 'apple');
    candy.set('blue','melon');    
    for (let [color, flavor] of candy){ //Ellen's cool unpacking method!
        console.log(`The ${flavor} flavor is colored ${color}.`);
    }
    console.log(`${candy.get('red')}`);
    console.log(`${candy.get('purple')}`); // returns undefined
}

//Functions
function candyCheck(color, candyMap) {
    let flavor = candyMap.get(color);
    if (flavor === undefined){
        console.log(`Sorry, that color doesnt have a flavor.`);
    } else {
        return flavor;
    }
}

function moreCandy(colorArray, candyMap) {
    let flavArray = [];
    for (let color of colorArray) {
        let flav = candyMap.get(color);
        if (flav === undefined){
            flavArray.push(null);
        } else {
            flavArray.push(flav);
        }
    }
    return flavArray;
} //further study: rework this with .map function



// ////////////////////////////////////////////////////////////////////////////

// Create a function that reverses a word

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
