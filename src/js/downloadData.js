// ---------------------------------------------------------------------------------------------------------------------
// FUNCTION FOR DOWNLOADING DATA LOCALLY; WITH BLOB
// ---------------------------------------------------------------------------------------------------------------------
export const downloadData = (safe, ID) => {
  safe.forEach((item) => {
    item.subjID = ID;
    item.correct = item.targetWord === item.chosenWord;
  });

  // convert object into CSV string
  const titleKeys = [
    'subjID',
    'trial',
    'targetWord',
    'chosenWord',
    'chosenCategory',
    'chosenPosition',
    'correct',
    'timestamp',
    'responseTime',
  ];

  const columnNames = [
    'id',
    'trial',
    'target_word',
    'chosen_word',
    'chosen_category',
    'chosen_position',
    'correct',
    'timestamp',
    'responsetime_ms',
  ];

  const refinedData = [];
  refinedData.push(columnNames);

  // use the keys to create the other rows
  safe.forEach((item) => {
    const row = titleKeys.map((key) => {
      return item[key];
    });
    refinedData.push(row);
  });

  let csvContent = '';
  refinedData.forEach((row) => {
    csvContent += row.join(',') + '\n';
  });

  // save current date & time (note: UTC time!)
  const day = new Date().toISOString().substring(0, 10);
  const time = new Date().toISOString().substring(11, 19);

  // download via blob
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
  const objUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', objUrl);
  link.setAttribute('download', `orev-demo-${ID}-${day}-${time}.csv`);
  link.click();
};
