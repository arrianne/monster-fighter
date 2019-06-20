new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {

      // Removing health from monster
      this.monsterHealth -= this.calculateDamage(3, 10);
      // we add a return here to stop the unnecessary code below running from running
      if (this.checkWin()) {
        return;
      }

      // Removing health from player
      this.playerHealth -= this.calculateDamage(5, 12);
      // We dont need a return here as it is the end of the function anyway
      this.checkWin();

    },
    specialAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    },

    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    // 'Confirm' is a built in function which gives us a yes or no dialogue
    checkWin: function() {
      if(this.monsterHealth <= 0) {
        if(confirm('You won! New game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
        return;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }

});
