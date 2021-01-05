import jQuery from "../core.js";
import document from "../var/document.js";
import rsingleTag from "./var/rsingleTag.js";
import buildFragment from "../manipulation/buildFragment.js";

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
// ! 解析html
jQuery.parseHTML = function( data, context, keepScripts ) {
	// ! data为string类型
	if ( typeof data !== "string" ) {
		return [];
	}
	// ! 上下文为什么会是boolean类型？？？？？？？？？？？？
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		// ! 通过创建处理文档对象来创建一个新的document
		context = document.implementation.createHTMLDocument( "" );

		// Set the base href for the created document
		// so any parsed elements with URLs
		// are based on the document's URL (gh-2965)
		base = context.createElement( "base" );
		base.href = document.location.href;
		context.head.appendChild( base );
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};
