/*const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const suitableVenues = []
  for (const station of stations) {
    const venueCapacity = station[1]
    const venueType = station[2]
    if (venueCapacity >= 20 && (venueType === "school" || venueType === "community centre")) {
      suitableVenues.push(station[0])
  }
}

return suitableVenues

}

chooseStations(stations)/*


/*const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const suitableVenues = []
  for (const station of stations) {
    const venueCapacity = station[1]
    if (venueCapacity >= 20) {
      suitableVenues.push(station[0])

      const venueType = station[2]
    if (venueType === "school" || venueType === "community centre") {
      suitableVenues.push(station[0])
    }
  }
}

return suitableVenues

}

console.log(chooseStations(stations))*/

/*const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition (moves){
  var x = 0
  var y = 0
  for (const move of moves) {
    switch(move) {
      case "north":
      y = y + 1
      break;
      case "south":
      y = y - 1
      break;
      case "west":
      x = x - 1
      break;
      case "east":
      x = x + 1
      break;
    }
  } 
  return [x, y]
}


finalPosition(moves);

console.log(finalPosition(moves));

function ageCalculator (name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}*/

/*function howManyHundreds(num) {
  var remainder = (num % 100);
  return (num - remainder )/ 100
}

howManyHundreds(99);*/
/*
function calculateRectangleArea(length, width) {
  if (length > 0 && width > 0) {
  let area = (length * width)
  return area
}
}


function calculateTriangleArea(base, height) {
  if (base > 0 && height > 0) {
    let area = (base * height) / 2
    return area 
  }
  }


function calculateCircleArea(radius) {
  if (radius > 0) {
    let π = 3.14
    let area = π * (radius * radius)
    return area 
  }
  }
var crew = [
captain = "Mal",
second = "Zoe",
pilot = "Wash",
companion = "Inara",
mercenary = "Jayne",
mechanic = "Kaylee"
]

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[1] = 8.5
prices[3] = 76
prices[7] = 16.8*/

/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 */
 
// your code goes here
/*
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers() {
  return team.length >= 7
}
console.log(hasEnoughPlayers(team));*/

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */
/*

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push([doctor = "Simon"]);
crew.push([sister = "River"]);
crew.push([sheperd = "Book"]);

// your code goes her*/

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `bills` and `totals`
 * - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
 * - Your `totals` array should be an array of numbers
 * - Your code should print the `totals` array to the console
 * - The output must be as described above. 
 */
/*
 var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map((bill, index) => {

  var newBill = (bill * 1.15)
  return newBill.toFixed()
});

console.log(totals);*/

/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */


var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];


for (var row = 0; row < numbers.length; row++) {
  for (var column = 0; column < numbers[row].length; column++) {
    if(numbers[row][column]%2===0)
            numbers[row][column]="even";
        else
            numbers[column][row]="odd";
    }
    console.log(numbers[row][column]);
}
// your code goes here
