var playerName = window.prompt("What is the name of your robot?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  window.alert("Welcome to Robot Gladiators");

  // subtract the value of player attack from enemy health and then use the result to update the enemy health variable
  enemyHealth = enemyHealth - playerAttack;

  // log a resulting message to the console showing updated enemy health after attack
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );

  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health remaining!");
  }
  // subtract the value of enemy attack from player health and then use the result to update the player health variable
  playerHealth = playerHealth - enemyAttack;
  // log a resulting message to the console showing updated player health after attack
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );

  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(enemyName + " still has" + playerHealth + " health remaining!");
  }
};

fight();
