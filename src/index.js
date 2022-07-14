/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可
// let val2 = "let再宣言";
// console.log(val2);

// // const
// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// const val4 = {
//   name: "tomtom",
//   age: 28
// };
// console.log(val4);
// constで定義したオブジェクトはプロパティ変更可能
// val4.name = "とむとむ"; // objectだとその中身は上書きできる
// console.log(val4);

// val4.address = "Kanagawa";
// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);

// constで定義した配列はプロパティ変更可能
// val5[0] = "bird";
// console.log(val5);
// val5.push("monkey");

/**
 * テンプレート文字列
 */
// const name = "とむ";
// const age = 28;
// // 「私の名前はとむです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いる方法
// const message2 = `私の名前は${name}です。年齢は${age}ちゃいです。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// const func2 = (str) => str; // {}があるときはreturnいる
// console.log(func2("func2です"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // }
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(5, 6));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "とむ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["とむ", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}ちゃいです。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("ほほほい");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1); // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// // const arr8 = arr4;
// // // console.log(arr8); //一緒に見えるが、参照が引き継がれる
// // arr8[0] = 100;
// // console.log(arr8);
// // console.log(arr4); // [100,20]になっている

// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "田坂"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //奇数
// });
// console.log(newNumArr);

// const nameArr = ["田中", "山田", "田坂"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

const nameArr = ["田中", "山田", "田坂"];
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));
const newNameArr = nameArr.map((name) => {
  if (name === "田坂") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

newNameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));
