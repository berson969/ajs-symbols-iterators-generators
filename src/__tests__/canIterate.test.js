import { expect, test } from '@jest/globals';
import canIterate from '../js/canIterate';

test('check-map', () => {
  expect(canIterate(new Map())).toBeTruthy();
});

test('check-set', () => {
  expect(canIterate(new Set())).toBeTruthy();
});

test('check-null', () => {
  expect(canIterate(null)).toBeFalsy();
});

test('check-number', () => {
  expect(canIterate(10)).toBeFalsy();
});

test('check-string', () => {
  expect(canIterate('Netology')).toBeTruthy();
});
