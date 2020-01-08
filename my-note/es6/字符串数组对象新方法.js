//数组 Array.from()  实例的fill()  Array.of()  实例的entries() values() keys()   实例的includes()//与字符串类似都是判断存在返回boolean
//math上的很多方法转移到number上   object很多方法转移到Rflect上
//补白
"123".padStart(6, "0"); //"123000"   还有padEnd
Array.from(); //将类数组转化为数组  map set Dom结构
Reflect.ownKeys(); //相当于Object.keys() 但是有时候Objecti.keys()拿不到前者可以拿到
Object.defineProperty(target, key, desc); //定义对象的属性  es5方法

//  var arr = [1, 2, 3, 4];
// var sum = arr.reduce(function (pre,cur,index,arr) {
//     console.log(pre);  1  3  6  开始的时候的值
//     console.log(cur);  2  3  4   相加当前的值
//     console.log(index);  1  2  3  当前元素的索引
//     console.log(arr);   [1, 2, 3, 4]  [1, 2, 3, 4]  [1, 2, 3, 4]  当前元素所属的数组对象
//     return pre + cur
// })
// console.log(sum);  10

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue); 从左开始计算直到生成最后一个数
/*
  total: 必需。初始值, 或者计算结束后的返回值。
  currentValue： 必需。当前元素。
  currentIndex： 可选。当前元素的索引；                     
  arr： 可选。当前元素所属的数组对象。
  initialValue: 可选。传递给函数的初始值，相当于total的初始值。
*/
//获取数组中元素出现的次数
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
let nameNum = names.reduce((pre, cur) => {// 替代for循环作用和forEach类似  reduceRight从右往左做累加
  if (cur in pre) { //判断是否是对象的属性
    pre[cur]++;
  } else {
    pre[cur] = 1;
  }
  return pre;
}, {});//最初为{}
console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}

var arr1 = [3, 4, 5, 6, 7];
var first = arr1.find(num => {
  //找到第一个符合的元素,和filter类似
  return num > 5;
});
console.log(first);// 6

{
  var o5 = {};
  Object.defineProperty(o5, "name", { //es5方法
    writable: false, //可赋值?
    configurable: false, //可删除?
    enumerable: true, //可遍历?
    value: "oes5" //当前name属性的具体值
  });
  console.log(o5.name); //oes5

  o5.name = "321";
  console.log(o5.name); //writable为false, 赋值失效, name依然为"oes5"

  delete o5.name;
  console.log(o5.name); //因为configurable为false所以不能删除, name依然为“oes5”
}

