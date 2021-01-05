import document from "../var/document.js";

// ! css 前缀
var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	// ! 创建一个空标签的style
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped vendor prefixed property
// TODO name是怎样的格式

// ! 返回一个可能存在的第三方前缀值
function finalPropName( name ) {
	var final = vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}

export default finalPropName;
