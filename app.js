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

      if(this.monsterHealth <= 0) {
        alert('you won!');
        this.gameIsRunning = false;
        return;
      }

      // Removing health from player
      var max = 12;
      var min = 5;
      this.playerHealth -= this.calculateDamage(5, 12);

      if(this.playerHealth <= 0) {
        alert('you lost!');
        this.gameIsRunning = false;
        return;
      }

    },
    specialAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    },

    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);

    }
  }

});
