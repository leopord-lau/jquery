import jQuery from "../core.js";
import document from "../var/document.js";

// ! 回调列表、 准备阶段push cb ， 执行阶段执行fn
var readyCallbacks = [],
	whenReady = function( fn ) {
		readyCallbacks.push( fn );
	},
	executeReady = function( fn ) {

		// Prevent errors from freezing future callback execution (gh-1823)
		// Not backwards-compatible as this does not execute sync
		window.setTimeout( function() {
			fn.call( document, jQuery );
		} );
	};

// ! ready 有什么用
jQuery.fn.ready = function( fn ) {
	whenReady( fn );
	return this;
};

// ! 扩展方法
jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	// ! 计算在准备事件完成之时又多少个item在等待
	readyWait: 1,
	
	// ! 准备阶段
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		// ! 执行等待的item
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		// ! dom事件已经准备好了
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		// TODO
		// ????? 为什么又要执行
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// ! 准备好时
		whenReady = function( fn ) {
			// ! push进栈后为什么又要出呢
			readyCallbacks.push( fn );

			// TODO 不理解为什么push进栈后又删除

			while ( readyCallbacks.length ) {
				fn = readyCallbacks.shift();
				if ( typeof fn === "function" ) {
					executeReady( fn );
				}
			}
		};

		whenReady();
	}
} );

// Make jQuery.ready Promise consumable (gh-1778)

// TODO

jQuery.ready.then = jQuery.fn.ready;

/**
 * The ready event handler and self cleanup method
 */

 // ! 加载完毕后执行
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.

// ! 使得$(document).ready() 在浏览器事件执行完后执行
if ( document.readyState !== "loading" ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {
	// ! 为什么要执行
	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}
