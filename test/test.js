import Game from '../game'

var assert = require('assert');
describe('Game', function() {
  describe('#indexOf()', function () {
    it('should return 1 when start is called', function () {

      var game = new Game();

      var x = game.start()
      assert.equal(x, 1);
    });
  });
});
