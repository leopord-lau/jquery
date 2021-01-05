import rnothtmlwhite from "../var/rnothtmlwhite.js";

// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

// ! /[^\x20\t\r\n\f]+/g

// ! 抽取出多余空格换行等重新进行 空格组合成字符串
function stripAndCollapse( value ) {
	var tokens = value.match( rnothtmlwhite ) || [];
	return tokens.join( " " );
}

export default stripAndCollapse;
