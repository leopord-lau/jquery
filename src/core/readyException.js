import jQuery from "../core.js";

// ! 准备异常
// TODO 为什么调用setTimeout ？？？？？？？？
jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};
