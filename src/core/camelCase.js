// Matches dashed string for camelizing
// ! 正则匹配规则
var rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
// ! 
function fcamelCase( _all, letter ) {
	console.log(arguments)
	return letter.toUpperCase();
}

// Convert dashed to camelCase
// ! 驼峰格式
function camelCase( string ) {
	return string.replace( rdashAlpha, fcamelCase );
}

export default camelCase;
