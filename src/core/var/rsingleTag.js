// rsingleTag matches a string consisting of a single HTML element with no attributes
// and captures the element's name
// ! 匹配出一个html标签并且该标签不包含任何属性同时返回这个标签名
export default ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
