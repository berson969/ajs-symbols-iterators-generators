class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Wrong size of name');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Wrong type of character');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  get stoned() {
    // eslint-disable-next-line no-underscore-dangle
    return this._stoned;
  }

  set stoned(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._stoned = value;
  }

  actionAttack(distance) {
    this.attackDistance = distance;

    if (['Magician', 'Daemon'].includes(this.type)) {
      const baseAttack = this.attack * (1 - (this.attackDistance - 1) * 0.1);
      const stonedAttack = (baseAttack - Math.log2(this.attackDistance) * 5) < 10 ? 10
        : Math.round(baseAttack - Math.log2(this.attackDistance) * 5);
      return this.stoned ? stonedAttack : Math.round(baseAttack);
    }
    return this.attack;
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
      this.health = 100;
    } else {
      throw new Error('Impossible to raise the level of dead');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health <= 0) {
      this.health = 0;
      throw new Error('Character is dead');
    }
  }
}

export default Character;
