'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
// 1.
console.log(game.scored); //Use .entries() to have index and player

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2. Use a loop to calculate the average odd and log it to the console
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3. Print the 3 odds to the console, but in a nice formatted way
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
*/

/*
// Maps - Data structure that we can use to map values to keys
// In maps, the keys can have any type (in objects they are always strings)
const rest = new Map(); // Create an empty map and then fill it with the .set method
rest.set('name', 'Classico italiano');
rest.set(1, 'Firenze, Italy'); //Possiamo inserire qualsiasi tipo, qui numero
rest.set(2, 'Lisbona, Portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');

console.log(rest.get('name')); //To read data from the map we use the .GET method
console.log(rest.get(true));

const time = 8;
rest.get(
  time > rest.get('open') && time < rest.get('close') // Check se time è nell'intervallo di tempo in cui il ristorante è aperto
    ? console.log(rest.get(true)) // se lo è, messaggio true
    : console.log(rest.get(false)) // se non lo è, messaggio false
);

console.log(rest.has('categories')); // .HAS method to check if there is the propoerty --> Boolean
rest.delete(2); // delete elements from the map con .DELETE method
console.log(rest);
console.log(rest.size); //.SIZE method
//rest.clear(); // .CLEAR method per cancellare
rest.set([1, 2], 'Test'); // usare un Array come key
console.log(rest.get([1, 2])); // non funziona --> undefined (non è lo stesso elemento nell'Heap)

const arr = [3, 4]; // per usare un Array va inserita come variabile!
rest.set(arr, 'Test 2');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading'); // possiamo selezionare gli object della pagina
console.log(rest);
*/

/*
// Other way to populate a Map
const question = new Map([
  ['question', 'What is the best programming language in the world?'], //first key
  [1, 'C'],
  [2, 'Java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);
console.log(question);
console.log(Object.entries(restaurant.openingHours));

// Convert object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Iteration on Maps
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3; // Number(prompt('Your answer? (1, 2 or 3)'));
console.log(answer);

question.get('correct') === answer
  ? console.log(question.get(true))
  : console.log(question.get(false));

console.log(question.get(question.get('correct') === answer)); // altro modo

// Convert Map to Array
console.log([...question]);
*/

/*  WHICH DATA STRUCTURE TO USE?
Sources of data:
1. from the program itself;
2. from the UI (User Interface);
3. from external sources (e.g. web API / Application Programming Interface)

A) Do we need a simple list of values? ---> we use an array or a Set
B) Do we need key value pairs? ---> we need an object or a Map (we describe a value using the key)

data coming from web API comes inthe form of a JSON file. It is a long string that can be converted in an Object. It is enough to use an Array

ARRAYS:  tasks = ['Code', 'Eat', 'Code']
- use when you need ORDERED list of values (might contain duplicates)
- use when you need to MANIPULATE data

SETS:  tasks = new Set([['Code', 'Eat', 'Code']])
- use when you need to work with UNIQUE values
- use then HIGH-PERFORMANCE is really important
- use to REMOVE DUPLICATES from array

OBJECTS: task = {
  task: 'Code',
  date: 'today',
  repeat: true
}
- more "traditional" key/value store;
- easier to write and access values with . and [];
- use when you need to include FUNCTIONS (methods);
- use when working with JSON (can convert to map)

MAPS: task = new Map([
  ['task', 'Code'],
  ['date', 'today'],
  [false, 'Start coding']
])
- better performance;
- keys can have ANY data type;
- easy to iterate;
- easy to compute size;
- use when you simply need to map key to values;
- use when you need keys that are NOT strings

*/

///////////////////////////////////////
// Coding Challenge #3
9;
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  let half = min < 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
