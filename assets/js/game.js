var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
// var playerDefense = Math.floor(Math.random() * 10) + 1;
// Use math.random to compare enemy attack to player defense and subtract from player health

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
// var enemyDefense = Math.floor(Math.random() * 10) + 1;
// Use math.random to compare player attack to enemy defense and subtract from enemy health

var fight = function() {
  alert("Welcome to Robot Gladiators! " + playerName + " vs. " + enemyName +"! " + playerName + ", are you ready to rumble!?");
}

fight();