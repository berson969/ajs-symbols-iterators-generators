import { expect, test } from '@jest/globals';
import Magician from '../js/characters/Magician';

test('open_Magician', () => {
  const hero = new Magician('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Magician',
    health: 100,
    level: 1,
    defence: 40,
    _stoned: false,
    attack: 10,
  });
});

test('attack-without-stoned', () => {
  const hero = new Magician('newPerson');
  expect(hero.actionAttack(4)).toBe(7);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Magician',
    health: 100,
    level: 1,
    attackDistance: 4,
    defence: 40,
    _stoned: false,
    attack: 10,
  });
});

test('attack-with-stoned-less-10', () => {
  const hero = new Magician('newPerson');
  hero.stoned = true;
  expect(hero.actionAttack(4)).toBe(10);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Magician',
    health: 100,
    level: 1,
    attackDistance: 4,
    defence: 40,
    _stoned: true,
    attack: 10,
  });
});

test('attack-with-stoned-more-10', () => {
  const hero = new Magician('newPerson');
  hero.stoned = true;
  hero.attack = 100;
  expect(hero.actionAttack(4)).toBe(60);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Magician',
    health: 100,
    level: 1,
    attackDistance: 4,
    defence: 40,
    _stoned: true,
    attack: 100,
  });
});
