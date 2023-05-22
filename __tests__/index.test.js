import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import  genDiff from '../src/index.js';
import { test, expect } from '@jest/globals';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
//const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
//const expected =  readFile(getFixturePath('result.txt'));
//const expected = readFileSync(`${process.cwd()}/__fixtures__/result.txt`,'utf-8')
const expected = readFile('result.txt');
//const first = `${process.cwd()}/__fixtures__/file1.json`;
//const second =`${process.cwd()}/__fixtures__/file2.json`;

const first = getFixturePath('file1.json');
const second = getFixturePath('file2.json');
test('difference test', () => {
const actual = genDiff(first, second);
    expect(actual).toEqual(expected);
});



