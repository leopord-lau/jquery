import class2type from "../var/class2type.js";
import toString from "../var/toString.js";

// ! 获取类型
// const class2type = {}
// const toString = Object.prototype.toString

// ! 获取类型主要是采用Object.prototype.toString.call(obj)方法进行获取
// ! 这里对null类型进行判断，返回undefined； 同时对typeof 类型为的 object 而 toString方法不为object的类型进行判断限制
function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	return typeof obj === "object" ?
	// TODO 为什么要加这样的 {}[]
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}

export default toType;
