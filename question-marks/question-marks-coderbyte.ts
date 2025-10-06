function QuestionsMarks(str) { 

  for (let i = 0; i < str.length; i++) {

    for (let j = i + 1; j < str.length; j++) {

      if (parseInt(str[i]) + parseInt(str[j]) === 10) {

        const questionMarksBetweenCurrentPair = str.slice(i, j).split("?").length - 1
        if (questionMarksBetweenCurrentPair === 3) {
          return true
        }

      }

    }

  }

  return false; 

}
