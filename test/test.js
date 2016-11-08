

var expect = require("chai").expect;

var LIVE = true;
var DEAD = false;

describe('A Live cell', function() {
  it('should should die if it has zero neighbors', function () {
    expect(nextGen(LIVE, 0)).to.equal(DEAD);
  });

  it('should should die if it has one neighbor', function () {
    expect(nextGen(LIVE, 1)).to.equal(DEAD);
  });

  it('should should die if it has four neighbors', function () {
    expect(nextGen(LIVE, 4)).to.equal(DEAD);
  });

  it('should should die if it has five neighbors', function () {
    expect(nextGen(LIVE, 5)).to.equal(DEAD);
  });

  it('should should live if it has 2 neighbors', function () {
    expect(nextGen(LIVE, 2)).to.equal(LIVE);
  });
});

describe('A Dead cell', function () {
  it("should live if it has three neighbors", function () {
    expect(nextGen(DEAD, 3)).to.equal(LIVE);
  });

  it("should stay dead if it has two neighbors", function () {
    expect(nextGen(DEAD, 2)).to.equal(DEAD);
  });
});

describe("A cell on the board", function () {
  it("should be retrievable", function () {
    var board = new Board();
    expect(board.get(0, 0)).to.equal(DEAD);
  });
});

describe("Add a cell to the board", function () {
  it("should be retrievable", function () {
    var board = new Board();
    board.setAlive(0, 0);
    expect(board.get(0, 0)).to.equal(LIVE);
  });
});

function nextGen(status, neighbors) {
  if (status === LIVE) {
    if (neighbors <= 1 || neighbors >= 4) {
      return DEAD;
    } else {
      return LIVE;
    }
  } else {
    if (neighbors === 3) {
      return LIVE;
    }
    return DEAD;
  }
}

function Board() {
  this.x = 0;
  this.y = 0;
  this.grid = {};
  this.get = function(x, y) {
    return this.grid[x + "," + y] === LIVE;
  }
  this.setAlive = function(x, y) {
    this.grid[x + "," + y] = LIVE;
  }
  var $this = this;
}
