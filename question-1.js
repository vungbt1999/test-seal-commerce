// Câu 1: Viết chương trình đệ quy tính tổng các số từ 1 đến n, với n là một số cho trước. 
// Ví dụ:
// 	n=0 -> 0
// 	n=1 -> 1
// 	n=3 -> 6
//   n=10 -> 55

const sum = (n) => {
  if(n <= 1) return n;
  return sum(n - 1) + n
}
console.log("sum:", sum(10))

