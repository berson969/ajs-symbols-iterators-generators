import { beforeEach, expect, test } from '@jest/globals';
import Character from '../js/characters/Character';

let hero;

beforeEach(() => {
  hero = new Character('newPerson', 'Bowman');
});

test('open_Character', () => {
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test('short_name', () => {
  expect(() => new Character('P', 'Bowman'))
    .toThrow('Wrong size of name');
});

test('long_name', () => {
  expect(() => new Character('veryLongName', 'Bowman'))
    .toThrow('Wrong size of name');
});

test('wrong_type', () => {
  expect(() => new Character('newPerson', 'wrongType'))
    .toThrow('Wrong type of character');
});

test('levelUp_raise', () => {
  hero.attack = 25;
  hero.defence = 25;
  hero.levelUp();
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('levelUp_no_raise', () => {
  hero.health = 0;
  expect(() => hero.levelUp()).toThrow('Impossible to raise the level of dead');
});

test('decrease_health', () => {
  hero.defence = 25;
  hero.damage(20);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 85,
    level: 1,
    attack: undefined,
    defence: 25,
  });
});

test('damage_for_dead', () => {
  hero.defence = 25;
  hero.health = 0;
  expect(() => hero.damage(20)).toThrow('Character is dead');
});

test('for_became_dead', () => {
  hero.defence = 25;
  expect(() => hero.damage(150)).toThrow('Character is dead');
  expect(hero.health).toBe(0);
});
