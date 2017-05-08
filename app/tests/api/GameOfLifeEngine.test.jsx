var expect = require('expect');

var GameOfLifeEngine = require('GameOfLifeEngine');

describe('GameOfLifeEngine', () => {
  it('should exist', () => {
    expect(GameOfLifeEngine).toExist();
  });


  it('should create an empty board', () => {
    var board = GameOfLifeEngine.generateClearBoard(5, 5);

    // check for the correct length
    expect(board.length).toBe(5);
    expect(board[0].length).toBe(5);
  });

  describe('still lifes', () => {
    it('block', () => {
        var board = [
            [false, false,  false,  false],
            [false, true,   true,   false],
            [false, true,   true,   false],
            [false, false,  false,  false]
        ];

        var nextGen = GameOfLifeEngine.getNextGeneration(board);

        expect(nextGen[0][0]).toBe(false);
        expect(nextGen[0][1]).toBe(false);
        expect(nextGen[0][2]).toBe(false);
        expect(nextGen[0][3]).toBe(false);

        expect(nextGen[1][0]).toBe(false);
        expect(nextGen[1][1]).toBe(true);
        expect(nextGen[1][2]).toBe(true);
        expect(nextGen[1][3]).toBe(false);

        expect(nextGen[2][0]).toBe(false);
        expect(nextGen[2][1]).toBe(true);
        expect(nextGen[2][2]).toBe(true);
        expect(nextGen[2][3]).toBe(false);

        expect(nextGen[3][0]).toBe(false);
        expect(nextGen[3][1]).toBe(false);
        expect(nextGen[3][2]).toBe(false);
        expect(nextGen[3][3]).toBe(false);
    });

    it('beehive', () => {
        var board = [
            [false, false,  false,  false,  false,  false],
            [false, false,  true,   true,   false,  false],
            [false, true,   false,  false,  true,   false],
            [false, false,  true,   true,   false,  false],
            [false, false,  false,  false,  false,  false]
        ];

        var nextGen = GameOfLifeEngine.getNextGeneration(board);

        expect(nextGen[0][0]).toBe(false);
        expect(nextGen[0][1]).toBe(false);
        expect(nextGen[0][2]).toBe(false);
        expect(nextGen[0][3]).toBe(false);
        expect(nextGen[0][4]).toBe(false);
        expect(nextGen[0][5]).toBe(false);

        expect(nextGen[1][0]).toBe(false);
        expect(nextGen[1][1]).toBe(false);
        expect(nextGen[1][2]).toBe(true);
        expect(nextGen[1][3]).toBe(true);
        expect(nextGen[1][4]).toBe(false);
        expect(nextGen[1][5]).toBe(false);

        expect(nextGen[2][0]).toBe(false);
        expect(nextGen[2][1]).toBe(true);
        expect(nextGen[2][2]).toBe(false);
        expect(nextGen[2][3]).toBe(false);
        expect(nextGen[2][4]).toBe(true);
        expect(nextGen[2][5]).toBe(false);

        expect(nextGen[3][0]).toBe(false);
        expect(nextGen[3][1]).toBe(false);
        expect(nextGen[3][2]).toBe(true);
        expect(nextGen[3][3]).toBe(true);
        expect(nextGen[3][4]).toBe(false);
        expect(nextGen[3][5]).toBe(false);

        expect(nextGen[4][0]).toBe(false);
        expect(nextGen[4][1]).toBe(false);
        expect(nextGen[4][2]).toBe(false);
        expect(nextGen[4][3]).toBe(false);
        expect(nextGen[4][4]).toBe(false);
        expect(nextGen[4][5]).toBe(false);
    });

    it('loaf', () => {
        var board = [
            [false, false,  false,  false,  false,  false],
            [false, false,  true,   true,   false,  false],
            [false, true,   false,  false,  true,   false],
            [false, false,  true,   false,  true,  false],
            [false, false,  false,  true,  false,  false],
            [false, false,  false,  false,  false,  false]
        ];

        var nextGen = GameOfLifeEngine.getNextGeneration(board);

        expect(nextGen[0][0]).toBe(false);
        expect(nextGen[0][1]).toBe(false);
        expect(nextGen[0][2]).toBe(false);
        expect(nextGen[0][3]).toBe(false);
        expect(nextGen[0][4]).toBe(false);
        expect(nextGen[0][5]).toBe(false);

        expect(nextGen[1][0]).toBe(false);
        expect(nextGen[1][1]).toBe(false);
        expect(nextGen[1][2]).toBe(true);
        expect(nextGen[1][3]).toBe(true);
        expect(nextGen[1][4]).toBe(false);
        expect(nextGen[1][5]).toBe(false);

        expect(nextGen[2][0]).toBe(false);
        expect(nextGen[2][1]).toBe(true);
        expect(nextGen[2][2]).toBe(false);
        expect(nextGen[2][3]).toBe(false);
        expect(nextGen[2][4]).toBe(true);
        expect(nextGen[2][5]).toBe(false);

        expect(nextGen[3][0]).toBe(false);
        expect(nextGen[3][1]).toBe(false);
        expect(nextGen[3][2]).toBe(true);
        expect(nextGen[3][3]).toBe(false);
        expect(nextGen[3][4]).toBe(true);
        expect(nextGen[3][5]).toBe(false);

        expect(nextGen[4][0]).toBe(false);
        expect(nextGen[4][1]).toBe(false);
        expect(nextGen[4][2]).toBe(false);
        expect(nextGen[4][3]).toBe(true);
        expect(nextGen[4][4]).toBe(false);
        expect(nextGen[4][5]).toBe(false);

        expect(nextGen[5][0]).toBe(false);
        expect(nextGen[5][1]).toBe(false);
        expect(nextGen[5][2]).toBe(false);
        expect(nextGen[5][3]).toBe(false);
        expect(nextGen[5][4]).toBe(false);
        expect(nextGen[5][5]).toBe(false);
    });

    it('boat', () => {
        var board = [
            [false, false,  false,  false,  false],
            [false, true,   true,   false,  false],
            [false, true,   false,  true,   false],
            [false, false,  true,   false,  false],
            [false, false,  false,  false,  false]
        ];

        var nextGen = GameOfLifeEngine.getNextGeneration(board);

        expect(nextGen[0][0]).toBe(false);
        expect(nextGen[0][1]).toBe(false);
        expect(nextGen[0][2]).toBe(false);
        expect(nextGen[0][3]).toBe(false);
        expect(nextGen[0][4]).toBe(false);

        expect(nextGen[1][0]).toBe(false);
        expect(nextGen[1][1]).toBe(true);
        expect(nextGen[1][2]).toBe(true);
        expect(nextGen[1][3]).toBe(false);
        expect(nextGen[1][4]).toBe(false);

        expect(nextGen[2][0]).toBe(false);
        expect(nextGen[2][1]).toBe(true);
        expect(nextGen[2][2]).toBe(false);
        expect(nextGen[2][3]).toBe(true);
        expect(nextGen[2][4]).toBe(false);

        expect(nextGen[3][0]).toBe(false);
        expect(nextGen[3][1]).toBe(false);
        expect(nextGen[3][2]).toBe(true);
        expect(nextGen[3][3]).toBe(false);
        expect(nextGen[3][4]).toBe(false);

        expect(nextGen[4][0]).toBe(false);
        expect(nextGen[4][1]).toBe(false);
        expect(nextGen[4][2]).toBe(false);
        expect(nextGen[4][3]).toBe(false);
        expect(nextGen[4][4]).toBe(false);
    });

    it('tub', () => {
        var board = [
            [false, false,  false,  false,  false],
            [false, false,  true,   false,  false],
            [false, true,   false,  true,   false],
            [false, false,  true,   false,  false],
            [false, false,  false,  false,  false]
        ];

        var nextGen = GameOfLifeEngine.getNextGeneration(board);

        expect(nextGen[0][0]).toBe(false);
        expect(nextGen[0][1]).toBe(false);
        expect(nextGen[0][2]).toBe(false);
        expect(nextGen[0][3]).toBe(false);
        expect(nextGen[0][4]).toBe(false);

        expect(nextGen[1][0]).toBe(false);
        expect(nextGen[1][1]).toBe(false);
        expect(nextGen[1][2]).toBe(true);
        expect(nextGen[1][3]).toBe(false);
        expect(nextGen[1][4]).toBe(false);

        expect(nextGen[2][0]).toBe(false);
        expect(nextGen[2][1]).toBe(true);
        expect(nextGen[2][2]).toBe(false);
        expect(nextGen[2][3]).toBe(true);
        expect(nextGen[2][4]).toBe(false);

        expect(nextGen[3][0]).toBe(false);
        expect(nextGen[3][1]).toBe(false);
        expect(nextGen[3][2]).toBe(true);
        expect(nextGen[3][3]).toBe(false);
        expect(nextGen[3][4]).toBe(false);

        expect(nextGen[4][0]).toBe(false);
        expect(nextGen[4][1]).toBe(false);
        expect(nextGen[4][2]).toBe(false);
        expect(nextGen[4][3]).toBe(false);
        expect(nextGen[4][4]).toBe(false);
    });
  });

  describe('oscillators lifes', () => {
    it('blinker', () => {
        var board = [
            [false, false,  false,  false, false],
            [false, false,  true,   false, false],
            [false, false,  true,   false, false],
            [false, false,  true,   false, false],
            [false, false,  false,  false, false]
        ];

        var nextGen = GameOfLifeEngine.getNextGeneration(board);

        expect(nextGen[0][0]).toBe(false);
        expect(nextGen[0][1]).toBe(false);
        expect(nextGen[0][2]).toBe(false);
        expect(nextGen[0][3]).toBe(false);
        expect(nextGen[0][4]).toBe(false);

        expect(nextGen[1][0]).toBe(false);
        expect(nextGen[1][1]).toBe(false);
        expect(nextGen[1][2]).toBe(false);
        expect(nextGen[1][3]).toBe(false);
        expect(nextGen[1][4]).toBe(false);

        expect(nextGen[2][0]).toBe(false);
        expect(nextGen[2][1]).toBe(true);
        expect(nextGen[2][2]).toBe(true);
        expect(nextGen[2][3]).toBe(true);
        expect(nextGen[2][4]).toBe(false);

        expect(nextGen[3][0]).toBe(false);
        expect(nextGen[3][1]).toBe(false);
        expect(nextGen[3][2]).toBe(false);
        expect(nextGen[3][3]).toBe(false);
        expect(nextGen[3][4]).toBe(false);

        expect(nextGen[4][0]).toBe(false);
        expect(nextGen[4][1]).toBe(false);
        expect(nextGen[4][2]).toBe(false);
        expect(nextGen[4][3]).toBe(false);
        expect(nextGen[4][4]).toBe(false);
    });

    it('toad', () => {
        var board = [
            [false, false,  false,  false,  false,  false],
            [false, false,  false,  false,  false,  false],
            [false, false,  true,   true,   true,   false],
            [false, true,   true,   true,   false,  false],
            [false, false,  false,  false,  false,  false],
            [false, false,  false,  false,  false,  false]
        ];

        var nextGen = GameOfLifeEngine.getNextGeneration(board);

        expect(nextGen[0][0]).toBe(false);
        expect(nextGen[0][1]).toBe(false);
        expect(nextGen[0][2]).toBe(false);
        expect(nextGen[0][3]).toBe(false);
        expect(nextGen[0][4]).toBe(false);
        expect(nextGen[0][5]).toBe(false);

        expect(nextGen[1][0]).toBe(false);
        expect(nextGen[1][1]).toBe(false);
        expect(nextGen[1][2]).toBe(false);
        expect(nextGen[1][3]).toBe(true);
        expect(nextGen[1][4]).toBe(false);
        expect(nextGen[1][5]).toBe(false);

        expect(nextGen[2][0]).toBe(false);
        expect(nextGen[2][1]).toBe(true);
        expect(nextGen[2][2]).toBe(false);
        expect(nextGen[2][3]).toBe(false);
        expect(nextGen[2][4]).toBe(true);
        expect(nextGen[2][5]).toBe(false);

        expect(nextGen[3][0]).toBe(false);
        expect(nextGen[3][1]).toBe(true);
        expect(nextGen[3][2]).toBe(false);
        expect(nextGen[3][3]).toBe(false);
        expect(nextGen[3][4]).toBe(true);
        expect(nextGen[3][5]).toBe(false);

        expect(nextGen[4][0]).toBe(false);
        expect(nextGen[4][1]).toBe(false);
        expect(nextGen[4][2]).toBe(true);
        expect(nextGen[4][3]).toBe(false);
        expect(nextGen[4][4]).toBe(false);
        expect(nextGen[4][5]).toBe(false);

        expect(nextGen[5][0]).toBe(false);
        expect(nextGen[5][1]).toBe(false);
        expect(nextGen[5][2]).toBe(false);
        expect(nextGen[5][3]).toBe(false);
        expect(nextGen[5][4]).toBe(false);
        expect(nextGen[5][5]).toBe(false);
    });

    it('beacon', () => {
        var board = [
            [false, false,  false,  false,  false,  false],
            [false, true,   true,   false,  false,  false],
            [false, true,   false,  false,  false,  false],
            [false, false,  false,  false,  true,   false],
            [false, false,  false,  true,   true,   false],
            [false, false,  false,  false,  false,  false]
        ];

        var nextGen = GameOfLifeEngine.getNextGeneration(board);

        expect(nextGen[0][0]).toBe(false);
        expect(nextGen[0][1]).toBe(false);
        expect(nextGen[0][2]).toBe(false);
        expect(nextGen[0][3]).toBe(false);
        expect(nextGen[0][4]).toBe(false);
        expect(nextGen[0][5]).toBe(false);

        expect(nextGen[1][0]).toBe(false);
        expect(nextGen[1][1]).toBe(true);
        expect(nextGen[1][2]).toBe(true);
        expect(nextGen[1][3]).toBe(false);
        expect(nextGen[1][4]).toBe(false);
        expect(nextGen[1][5]).toBe(false);

        expect(nextGen[2][0]).toBe(false);
        expect(nextGen[2][1]).toBe(true);
        expect(nextGen[2][2]).toBe(true);
        expect(nextGen[2][3]).toBe(false);
        expect(nextGen[2][4]).toBe(false);
        expect(nextGen[2][5]).toBe(false);

        expect(nextGen[3][0]).toBe(false);
        expect(nextGen[3][1]).toBe(false);
        expect(nextGen[3][2]).toBe(false);
        expect(nextGen[3][3]).toBe(true);
        expect(nextGen[3][4]).toBe(true);
        expect(nextGen[3][5]).toBe(false);

        expect(nextGen[4][0]).toBe(false);
        expect(nextGen[4][1]).toBe(false);
        expect(nextGen[4][2]).toBe(false);
        expect(nextGen[4][3]).toBe(true);
        expect(nextGen[4][4]).toBe(true);
        expect(nextGen[4][5]).toBe(false);

        expect(nextGen[5][0]).toBe(false);
        expect(nextGen[5][1]).toBe(false);
        expect(nextGen[5][2]).toBe(false);
        expect(nextGen[5][3]).toBe(false);
        expect(nextGen[5][4]).toBe(false);
        expect(nextGen[5][5]).toBe(false);
    });
  });
});