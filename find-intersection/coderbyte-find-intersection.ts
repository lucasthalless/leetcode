function FindIntersection(strArr) { 
  const firstList = strArr[0].split(",");
  const secondList = strArr[1].split(",");
  const intersection = []

  for (let i = 0; i < firstList.length; i++) {
    if (secondList.includes(firstList[i])) {
      intersection.push(firstList[i]);
    }
  }

  return intersection.length > 0 ? intersection : "false"; 
}
