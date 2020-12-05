// 1.使用commonjs的模块化规范
const {total, mul} = require('./mathUtils.js')

console.log(total(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./info.js";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('../css/style.css')

// 4.依赖less文件
require('../css/special.less')
document.writeln('<h2>你好啊,小河豚!</h2>')

