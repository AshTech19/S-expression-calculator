const assert = require('assert');
const evaluate = require('./calc');

describe('calculator', () => {
    it('should evaluate integers', () => {
        assert.strictEqual(evaluate('123'), 123);
        assert.strictEqual(evaluate('0'), 0);
    });

    it('should evaluate the add function', () => {
        assert.strictEqual(evaluate('(add 1 1)'), 2);
        assert.strictEqual(evaluate('(add 0 (add 3 4))'), 7);
        assert.strictEqual(evaluate('(add 3 (add (add 3 3) 3))'), 12);
    });

    it('should evaluate the multiply function', () => {
        assert.strictEqual(evaluate('(multiply 1 1)'), 1);
        assert.strictEqual(evaluate('(multiply 0 (multiply 3 4))'), 0);
        assert.strictEqual(evaluate('(multiply 2 (multiply 3 4))'), 24);
        assert.strictEqual(evaluate('(multiply 3 (multiply (multiply 3 3) 3))'), 81);
      });
      
      it('should evaluate mixed expressions', () => {
        assert.strictEqual(evaluate('(add 1 (multiply 2 3))'), 7);
        assert.strictEqual(evaluate('(multiply 2 (add (multiply 2 3) 8))'), 28);
      });
    
      it('should throw an error on invalid input', () => {
        assert.throws(() => evaluate('(subtract 1 2)'), /Invalid operator/);
        assert.throws(() => evaluate('not_a_valid_expression'), /Invalid expression/);
      });
    });
    