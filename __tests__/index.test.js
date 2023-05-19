import { readFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import  genDiff from '../src/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
//const expected =  readFile(getFixturePath('result.txt'));
const expected = readFileSync(`${process.cwd()}/__fixtures__/result.txt`,'utf-8')
const first = `${process.cwd()}/__fixtures__/file1.json`;
const second =`${process.cwd()}/__fixtures__/file2.json`;

test('difference test', () => {
  expect(genDiff(first, second)).toEqual(expected);
});


