import camelCase from "../core/camelCase.js";

// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/;

// Convert dashed to camelCase, handle vendor prefixes.
// Used by the css & effects modules.
// Support: IE <=9 - 11+
// Microsoft forgot to hump their vendor prefix (#9572)
// ! 为什么要将 -ms- 转成 ms- 后在采用驼峰命名  msS
function cssCamelCase( string ) {
	return camelCase( string.replace( rmsPrefix, "ms-" ) );
}

export default cssCamelCase;
