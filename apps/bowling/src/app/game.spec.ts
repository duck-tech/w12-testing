import { IterableDiffers } from '@angular/core';
import { Game } from './game';

describe('Game', () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });
  // it should create an instance
  it('should create an instance', () => {
    expect(game).toBeTruthy();
  });

  test("gutter game", () => {
    rollMany(20,0);
    expect(game.score).toBe(0);
  });

  test("all one", () => {
    rollMany(20,1);
    expect(game.score).toBe(20);
  });

  function rollMany(n: number, pins: number) {
      for (let i = 0; i < n; i++) {
        game.roll(pins);
      }
    }

  test('test on one spare', () => {
    // spare 
    game.roll(5);
    game.roll(5); 
    game.roll(3);
    rollMany(17, 0);
    expect(game.score).toBe(16);
  });

  test('test on one strike', () => {
  // strike
  game.roll(10); 
  game.roll(3);
  game.roll(4);
  rollMany(17, 0);
  expect(game.score).toBe(24);
});

  test('perfect game', () => {
    rollMany(12, 10);
    expect(game.score).toBe(300);
  });
});
