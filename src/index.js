import { resolve, extname } from 'path';
import { readFileSync } from 'fs';
import fs  from 'fs';
import buildTree from './buildTree.js';
import parsers from './parse.js';

  const getFormat = (filepath) => (extname(filepath)).slice(1);
  const getFixturePath = (filepath) => resolve(process.cwd(), filepath);
  const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');
  const genDiff = (filepath1, filepath2) => {
  const pathFile1 = getFixturePath(filepath1);
  const pathFile2 = getFixturePath(filepath2);
  const dataFile1 = readFile(pathFile1);
  const dataFile2 = readFile(pathFile2);
  //const data1 = JSON.parse(dataFile1);
  //const data2 = JSON.parse(dataFile2);
  const data1 = parsers(dataFile1, getFormat(filepath1));
  const data2 = parsers(dataFile2, getFormat(filepath2));
  const informationDiff = buildTree(data1, data2);
return informationDiff;
};

export default genDiff;
