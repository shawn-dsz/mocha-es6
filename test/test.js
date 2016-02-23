import Game from '../game'
import {expect} from 'chai'

var assert = require('assert');
describe('Game', function() {
  describe('#indexOf()', function () {
    it('should return 1 when start is called', function () {

      var game = new Game();

      var x = game.start()
      expect(x).to.equal(10)
    });
  });
});
