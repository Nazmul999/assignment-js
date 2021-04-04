//feet to mile
function feetToMile(feet) {
    var Mile = feet/5212;
    return Mile;
}
var firstPersonMile = feetToMile(1200);
console.log("First person mile =",firstPersonMile);

// wood Calculator
function woodCalculator(chair, table, bed) {
    var chairWood = 10;
    var tableWood = 30;
    var bedWood = 50;
    if (chair, table, bed <= 0) {
        return "Error: This value is not valid. Try again.";
    }
    return chairWood * chair + tableWood * table + bedWood * bed;
}
console.log(woodCalculator(10, 15, 30));

// Brick Calculator
function brickCalculator(feet) {
    var brick = 0;
    if (feet <= 10){
        brick = 10 * 100
    } else if (feet <= 20){
        brick = 10 * 100 + (feet - 10) * 80
    } else {
        brick = 10 * 100 + 10 * 80 + (feet - 20) * 50
    }
    return brick;
} 
console.log(brickCalculator(50));
//tiny Friend
function tinyFriend(array) {
    var smallest = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length < smallest.length) {
            smallest = array[i];
        } else if (array <= 0) {
            return "Error: This value is not valid. Try again.";
        } else if (array === [""]) {
            return "Error: This value is not valid. Try again.";
        }
    }
    return smallest;
}
 console.log(tinyFriend(["Abid","Huda","Numan","Ali", "Zaman"]));