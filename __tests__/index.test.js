import { join } from 'path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => join('..', '__fixtures__', filename);
const first =  getFixturePath(file1.json);
const second = getFixturePath(file2.json);

const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`


test('difference test', () => {
  expect(genDiff(first, second)).toEqual(expected);
});

