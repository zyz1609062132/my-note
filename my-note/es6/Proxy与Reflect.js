// es3 es5 数据保护
// var Person = function() { //es3
//     var data = {
//         name: 'es3',
//         sex: 'male',
//         age: 15
//     }
//     this.get = function(key) {
//         return data[key]
//     }
//     this.set = function(key,value) {
//         if(key !== 'sex') {
//             data[key] = value
//         }
//     }
// }

// var Person = { // es5
//     name: 'es5',
//     age: 15
// }
// Object.defineProperty(Person,'sex',{
//     writable:false,
//     value:'male'
// })

let Person = {
  //代理前的对象
  name: "es6",
  sex: "male",
  age: 15
};

let person = new Proxy(Person, {
  //代理Person,以后操作person,保护了Person   和es5 中 get set方法类似   代理后的对象
  get(target, key) {
    //target为Person,key指的是哪个属性 get拦截所有读取的属性
    return target[key];
  },
  set(target, key, value) {
    //set拦截所有属性的设置
    if (key != "sex") {
      target[key] = value;
    }
  },
  has(target, key) {
    //拦截key in object操作
    if (key === "name") {
      return target[key];
    } else {
      return false;
    }
  },
  deleteProperty(target, key) {
    //拦截delete
    if (key.indexOf("_") > -1) {
      delete target[key];
      return true;
    } else {
      return target[key];
    }
  },
  //拦截Object.kyes()(不包含不可枚举属性),Object.getOwnPropertyNames() (包含不可枚举属性),Object.getOwnPropertySymbols(返回对象所有symbol属性的数组)
  //propertyIsEnumerable() 判断是否可枚举   可枚举属性才能被for...in访问
  ownKeys(target) {
    return Object.keys(target).filter(item => item != "time");
  }
});

console.table({
  name: person.name,
  sex: person.sex,
  age: person.age
});
try {
  person.sex = "female";
  console.log('Person.sex',person.sex); //没有生效
} catch (e) {
  console.log(e);
}

// Proxy{[[Handler]]: e, [[Target]]: Object, [[IsRevoked]: false]}   //代理对象
//reflect用法与proxy类似
{
  let obj = {
    time: "2017-03-11",
    name: "net",
    _r: 123
  };
  console.log("Reflect get", Reflect.get(obj, "time"));
  Reflect.set(obj, "name", "mukewang");
  console.log(obj);
  console.log("has", Reflect.has(obj, "name"));
}
