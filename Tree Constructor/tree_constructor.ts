function TreeConstructor(strArr: string[]) {

  const children = {}
  const parents = {}

  for (let i = 0; i < strArr.length; i++) {
    const pair = strArr[i].replace(/[()]/g, "").split(",");
    const child = pair[0];
    const parent = pair[1];

    if (parents[parent]) {
      parents[parent].push(child)
    } else {
      parents[parent] = [child]
    }

    if (parents[parent].length > 2) {
      return false
    }

    if (children[child]) {
      return false
    } else {
      children[child] = parent;
    }
  }

  return true
}
