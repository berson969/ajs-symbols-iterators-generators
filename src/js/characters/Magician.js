import Character from './Character';

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }
}

export default Magician;
