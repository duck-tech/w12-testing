import { IterableDiffers } from '@angular/core';
import { Game } from './game';

describe('Game', () => {
  // it should create an instance
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

test("gutter game", () => {
  const game = new Game();
  for (let i = 0; i < 20; i++) {
    game.roll(0);
  }
  expect(game.score).toBe(0);
});
});

