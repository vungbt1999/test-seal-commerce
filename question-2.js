// Câu 2: Cho một dãy số [1, 25, 7, -7, -3, 12, -22, 0]
// 1.	Sử dụng JavaScript để sắp xếp dãy số theo thứ tự tăng dần.
// 	Kết quả: [-22, -7, -3, 0, 1, 7, 12, 25]

const sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let term = i;
    for (let j = i + 1; j < arr.length; j++) {
      const value1 = arr[j] < 0 ? -1 * arr[j] : arr[j];
      const value2 = arr[term] < 0 ? -1 * arr[term] : arr[term];
      if (value1 < value2) term = j;
    }
    let swap = arr[i];
    arr[i] = arr[term];
    arr[term] = swap;
  }

  const newArr = [...arr];
  return sortLevel2(newArr);
};

const sortLevel2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let index1 = i;
    let index2 = i + 1;
    let term = i;
    if (arr[index2] < 0) {
      if (arr[index1] === -1 * arr[index2]) term = i + 1;
    }

    let swap = arr[i];
    arr[i] = arr[term];
    arr[term] = swap;
  }
  return arr;
};

console.log(
  "newArray:",
  sort([-1, -22, -7, -3, 0, 1, 7, -24, 12, 3, -2, 23, 25])
);
