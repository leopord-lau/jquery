import document from "../var/document.js";

// ! script标签中存在的属性
var preservedScriptAttributes = {
	type: true,
	src: true,
	nonce: true,
	noModule: true
};

// ! 执行js片段
function DOMEval( code, node, doc ) {
	doc = doc || document;

	var i,
		script = doc.createElement( "script" );

	script.text = code;
	if ( node ) {
		for ( i in preservedScriptAttributes ) {
			if ( node[ i ] ) {
				script[ i ] = node[ i ];
			}
		}
	}
	doc.head.appendChild( script ).parentNode.removeChild( script );
}

export default DOMEval;
