import animals from "./data";

// Way1:正常賦值
const cat = animals[0];
const dog = animals[1];
// Way2:解構賦值destructuring assignment
// 由於animals數組包含兩個屬性，我們將其賦值給兩個常量。
const [cat, dog] = animals; // 解構數組用[ ]以獲取物件

const { name, sound } = cat; // 解構物件/變量用{ }以獲取屬性
//"冒號"重新命名屬性名(catName, catSound)，但左側必須必須和原屬姓名一致
const { name: catName, sound: catSound } = cat;
//  "等號" 設置默認值。
const { name = "默認小咪", sound = "默認喵" } = cat;

// 內嵌物件feedingRequirements中的屬性food,water
const {
  name,
  sound,
  feedingRequirements: { food, water },
} = cat;
console.log(food);
// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
