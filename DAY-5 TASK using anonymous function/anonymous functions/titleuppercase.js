let  convertToTitleCase = function(stringArray) {
    const titleCaseArray = stringArray.map((str) =>
      str.replace(/\b\w/g, (match) => match.toUpperCase())
    );
  
    return titleCaseArray;
  }
  const stringArray = ['hello world', 'javascript is awesome', 'title caps'];

  const titleCaseArray = convertToTitleCase(stringArray);
  
  console.log(titleCaseArray);
    