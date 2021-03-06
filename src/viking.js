// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  //constructor(health, strength) {
  //super(health, strength);}
  //No need to write them as identical to Soldier class
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War;
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * saxonArmy.length + 1)
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * vikingArmy.length + 1)
    ];

    //randomSaxon.health -= randomViking.strength;

    // ABOVE IN 1 LINE
    // this.saxonArmy[
    //   Math.floor(Math.random() * saxonArmy.length + 1)
    // ].receiveDamage(
    //   this.vikingArmy[Math.floor(Math.random() * vikingArmy.length + 1)]
    // );

    // if ((randomSaxon.health = 0)) {
    //   this.saxonArmy.splice(randomSaxon, 1);
    // }

    this.saxonArmy.filter((eachSaxon) => eachSaxon.health > 0);

    return randomSaxon.receiveDamage(randomViking.strength);

    // return randomSaxon.receiveDamage(randomViking.strength);
  }

  saxonAttack() {}

  showStatus() {
    if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
  }
}
