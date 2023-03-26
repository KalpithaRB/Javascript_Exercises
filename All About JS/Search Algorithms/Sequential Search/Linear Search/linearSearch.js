const linearSearch = (arr, item) => {
    for (const i in arr) 
    {
      if (arr[i] === item) 
        return +i;
    }
    return -1;
  };

  let sampleData = [10, 41, 14, 55, 38, 90, 39];
  console.log(linearSearch(sampleData, 14));
console.log(linearSearch(sampleData, 90));