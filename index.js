

function bstSearch(root,val) {
  let currentNode = root;
  
  while (currentNode!==null) {
    const curVal = currentNode.value;
    
    if (curVal===val) {
      return currentNode
    } else if (curVal<val) {
      currentNode = currentNode.left
    } else if (curVal>val) {
      currentNode = currentNode.right
    } 
  }
  return null
}