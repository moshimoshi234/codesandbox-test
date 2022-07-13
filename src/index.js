/**
 * 分割代入
 */
// const myprofile = {
//   name: "Ken",
//   age: 28
// };

// const { name, age } = myprofile;

// const message2 = `名前は${name}です。年齢は${age}歳です。                                                                                           `;

// console.log(message2);

/**
 * スプレッド構文
 */
// 配列の展開
// const array = [1, 2];
// const sum = (num1, num2) => console.log(num1 + num2);
// sum(array[0], array[1]);
// sum(...array);
// 上と下は同じ処理をする！！

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // コピー
// const arr6 = [...arr4];
// console.log(arr6);

// // 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// mapやfilterを使った配列の処理
// 配列の要素をそれぞれ取り出す
const nameArr = ["田中", "山田", "佐藤"];

// 従来の方法
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// mapを使った方法
// nameArr.map((name) => console.log(name));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// 三項演算子
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
// };
// console.log(checkSum(50, 60));
