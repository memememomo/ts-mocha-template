import * as assert from 'power-assert';
import {Person} from '../src/Person';

describe('PersonTest', () => {
    it('コンストラクタのテスト', () => {
        const person:Person = new Person(10, 'uchiko');
        assert.equal(person.id, 10);
        assert.equal(person.name, 'uchiko');
    })
});
