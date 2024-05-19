const calculateSum = (arr) => {

    if (arr.length === 0) {
      return 0;
    }
  
    return arr.reduce((n, num) => (num % 3 === 0 ? n + num : n), 0);
  };
  const coll1 = [8, 9, 21, 19, 18, 22, 7];
  console.log(calculateSum(coll1)); // 48
  
  const coll2 = [2, 0, 17, 3, 9, 15, 4];
  console.log(calculateSum(coll2)); // 27
  
  const coll = [];
  console.log(calculateSum(coll)); // 0
  