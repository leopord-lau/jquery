
// ! 判断给定的节点的名称跟 传入的名称是否相等
function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}

export default nodeName;
