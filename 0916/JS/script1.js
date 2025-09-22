function capitalize(paragraph) {
  let result = "";
  let capitalize = true;

  for (let i = 0; i < paragraph.length; i++) {
    let ch = paragraph[i];
    if (capitalize && /[a-z]/.test(ch)) {
      result += ch.toUpperCase();
      capitalize = false;
    } else {
      result += ch;
    }

    if (/[.?!]/.test(ch)) {
      capitalize = true;
    }
  }
  return result;
}
