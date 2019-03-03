
const rawData = STRING_FROM_SHEETS.split('\n').map(line => line.split('\t'));
const data = [];
rawData.forEach((line, i) => {
  if (!i) return;
  data.push({});
  line.forEach((column, j) => {
    data[i - 1][rawData[0][j]] = rawData[i][j];
  });
});

console.log(JSON.stringfy(data));
