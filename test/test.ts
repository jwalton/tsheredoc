import 'mocha';
import { expect } from 'chai';
import heredoc from '../src/index';

describe('tests', function () {
    it('should work (template string)', function () {
        const result = heredoc`
            test
            test
              test
        `;
        expect(result).to.equal('test\ntest\n  test\n');
    });

    it('should work (string)', function () {
        const result = heredoc(`
            test
            test
              test
        `);
        expect(result).to.equal('test\ntest\n  test\n');
    });

    it('should correctly render a line with no newlines (template string)', function () {
        const result = heredoc`test`;
        expect(result).to.equal('test');
    });

    it('should correctly render a line with no newlines (string)', function () {
        const result = heredoc(`test`);
        expect(result).to.equal('test');
    });

    it('should not insert extra whitespace (template string)', function () {
        const result = heredoc`
            test
            test
              test`;
        expect(result).to.equal('test\ntest\n  test');
    });

    it('should not insert extra whitespace (string)', function () {
        const result = heredoc(`
            test
            test
              test`);
        expect(result).to.equal('test\ntest\n  test');
    });

    it('should correctly render template strings with interpolation', function () {
        const result = heredoc`
            ${0}
            ${"test"}
            ${"  bar"}
        `;
        expect(result).to.equal('0\ntest\n  bar\n');
    });

});
