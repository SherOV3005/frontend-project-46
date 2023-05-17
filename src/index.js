import { resolve } from 'path';
import _ from 'lodash';
import { readFileSync } from 'fs';

const getFixturePath = (filepath) => resolve(process.cwd(), filepath);
const genDiff = (filepath1, filepath2) => {
  const pathFile1 = getFixturePath(filepath1);
  const pathFile2 = getFixturePath(filepath2);
  const dataFile1 = readFileSync(pathFile1, 'utf-8');
  const dataFile2 = readFileSync(pathFile2, 'utf-8');
  const data1 = JSON.parse(dataFile1);
  const data2 = JSON.parse(dataFile2);
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  const resultArr = {};
  const result = keys.map((key) => {
    if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      resultArr[`+ ${key}`] = data2[key];
    }
    if (!Object.hasOwn(data2, key) && Object.hasOwn(data1, key)) {
      resultArr[`- ${key}`] = data1[key];
    }
    if ((Object.hasOwn(data2, key) && Object.hasOwn(data1, key))
&& !_.isEqual(data1[key], data2[key])) {
      resultArr[`- ${key}`] = data1[key];
      resultArr[`+ ${key}`] = data2[key];
    }
    if (_.isEqual(data1[key], data2[key])) {
      resultArr[`  ${key}`] = data1[key];
    }
  });
  const str = JSON.stringify(resultArr, null, ' ');
  const itogStr = str.replace(/"/gi, '').replace(/,/gi, '');
  return (itogStr);
};
export default genDiff;
