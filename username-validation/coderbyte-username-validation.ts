function CodelandUsernameValidation(str) {

  const onlyLettersRegex = /[a-zA-Z]/g;
  const onlyLettersNumbersAndUnderscoreRegex = /\w/g

  if(!onlyLettersRegex.test(str[0]) || !onlyLettersNumbersAndUnderscoreRegex.test(str) || str[str.length-1] === "_") {
    return "false"
  }

  if(str.lentgh < 4 || str.length > 25) {
    return "false"
  }

  return "true"; 

}
