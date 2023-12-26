// callback hell

function getData(dataId, getNextData) {
  // 2s

  setTimeout(() => {
    console.log("data", dataId);

    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

// print the data by using callback and 2 secend every data is time the out put:

// data 1
// data 2
// data 3
// data 4