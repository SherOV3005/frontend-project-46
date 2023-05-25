import _ from 'lodash';

const buildTree = (data1, data2) => {
//const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
//  const resultArr = {};
//  const result = keys.map((key) => {
//    if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
//      resultArr[`+ ${key}`] = data2[key];
//    }
//    if (!Object.hasOwn(data2, key) && Object.hasOwn(data1, key)) {
//      resultArr[`- ${key}`] = data1[key];
//    }
//    if ((Object.hasOwn(data2, key) && Object.hasOwn(data1, key))
//&& !_.isEqual(data1[key], data2[key])) {
//      resultArr[`- ${key}`] = data1[key];
//      resultArr[`+ ${key}`] = data2[key];
//    }
//    if (_.isEqual(data1[key], data2[key])) {
//      resultArr[`  ${key}`] = data1[key];
//    }
//  });
//  const str = JSON.stringify(resultArr, null, ' ');
//  const itogStr = str.replace(/"/gi, '').replace(/,/gi, '');
//  return (itogStr);
const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const differences = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${differences.join('\n')}\n}\n`;
};

export default buildTree;
