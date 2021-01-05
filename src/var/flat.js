import arr from "./arr.js";

// Support: IE 11+
// IE doesn't have Array#flat; provide a fallback.
//! 数组扁平化
export default arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};
