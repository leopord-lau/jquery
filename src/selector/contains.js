import jQuery from "../core.js";

// Note: an element does not contain itself
// ! 判断元素是否包含某个元素（不包含自身）
jQuery.contains = function( a, b ) {
	var adown = a.nodeType === 9 ? a.documentElement : a,
		bup = b && b.parentNode;
	// ! a === bup 解决svg不存在contains问题
	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		// ! 节点存在contains方法
		adown.contains ?
			adown.contains( bup ) :
			// TODO a.compareDocumentPosition( bup ) & 16 返回数字 ??????
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};
