function modifiyContentByB() {
  let count = 1;
  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] != "") {
      contentArr[i] = count + ") " + contentArr[i];
      count++;
    }
  }
}
