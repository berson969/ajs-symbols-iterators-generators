import { expect, test } from '@jest/globals';
import Bowman from '../js/characters/Bowman';

test('open_Bowman', () => {
  const hero = new Bowman('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('attack-without-stoned', () => {
  const hero = new Bowman('newPerson');
  expect(hero.actionAttack(1)).toBe(25);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 100,
    level: 1,
    attackDistance: 1,
    defence: 25,
    attack: 25,
  });
});
