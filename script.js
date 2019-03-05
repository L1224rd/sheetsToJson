const sheetToJson = (sheetString) => {
  const rawData = sheetString.split('\n').map(line => line.split('\t'));
  const data = [];
  
  rawData.forEach((line, i) => {
    if (!i) return;
    data.push({});
    line.forEach((column, j) => {
      data[i - 1][rawData[0][j]] = rawData[i][j];
    });
  });
  
  return data;
};
