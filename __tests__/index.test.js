import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import  genDiff from '../src/index.js';
import { test, expect } from '@jest/globals';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
//test('difference test', () => {
//const expected = readFile('result.txt');
//const first = getFixturePath('file1.json');
//const second = getFixturePath('file2.json');
//const actual = genDiff(first, second);
//expect(actual).toEqual(expected);
//});

test('file json', () => {
  const filename1 = getFixturePath('file1.json');
  const filename2 = getFixturePath('file2.json');
  //const resultname = getFixturePath('result.txt');
  const result = readFile('result.txt');
  expect(genDiff(filename1, filename2)).toEqual(result);
});

test('file yaml', () => {
  const filename1 = getFixturePath('file1.yaml');
  const filename2 = getFixturePath('file2.yaml');
  //const resultname = getFixturePath('result.txt');
  const result = readFile('result.txt');
  expect(genDiff(filename1, filename2)).toEqual(result);
});




