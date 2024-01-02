var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
// var playerDefense = Math.floor(Math.random() * 10) + 1;
// Use math.random to compare enemy attack to player defense and subtract from player health

var enemyName = "Roborto";
var enemyHealth = 10;
var enemyAttack = 12;
// var enemyDefense = Math.floor(Math.random() * 10) + 1;
// Use math.random to compare player attack to enemy defense and subtract from enemy health

var fight = function() {
  alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt(playerName + ", would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    if (enemyHealth <= 0) {
      alert(enemyName + " has died!");
    } else {
      alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    if (playerHealth <= 0) {
      alert(playerName + " has died!");
    } else {
      alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
      alert(playerName + " has decided to skip this fight. Goodbye!");
      // playerMoney = playerMoney - 2;
    } else {
      fight();
    }
  }
};

fight();