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
  alert("Welcome to Robot Gladiators! " + playerName + " vs. " + enemyName +"! " + playerName + ", are you ready to rumble!?");

  enemyHealth = enemyHealth - playerAttack;
  if (enemyHealth <= 0) {
    alert(enemyName + " has died!");
  } else {console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  )};

  playerHealth = playerHealth - enemyAttack;
  if (playerHealth <= 0) {
    alert(playerName + " has died!");
  } else {
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )
  };
};

fight();