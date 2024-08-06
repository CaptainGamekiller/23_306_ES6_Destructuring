// 一個"常量數組"animals中包含兩個objects
// 每個object中包含兩個屬性name和sound
const animals = [
  {
    name: "cat",
    sound: "meow",
    // 創建一個內嵌物件
    feedingRequirements: {
      food: 2,
      water: 3,
    },
  },
  { name: "dog", sound: "woof" },
];

export default animals;
