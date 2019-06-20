new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    attack: function() {
      var damage = this.calculateDamage(5, 12);
      // Removing health from monster
      this.monsterHealth -= damage;
      // shift will add the turn to the start of the list
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage;
      });
      // we add a return here to stop the unnecessary code below running from running
      if (this.checkWin()) {
        return;
      }
      //added a new function for monster attacks below as this was being repeated
      this.monsterAttacks();
    },

    specialAttack: function() {
      // This can be copied from the attack function and just altered
      this.monsterHealth -= this.calculateDamage(10, 20);
      // we add a return here to stop the unnecessary code below running from running
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },

    heal: function() {
      // this if statement prevents the players health going above 100
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttacks();
    },

    giveUp: function() {
      this.gameIsRunning = false;
    },

    monsterAttacks: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: 'Player hits Monster for ' + damage;
      });
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
