function capitalize(paragraph) {
  let flag = true; // capitalize next letter?
  const chars = paragraph.split(""); // strings are immutable in JS

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];

    // If we should capitalize and this is a lowercase ASCII letter, do: code-32
    if (flag && /[a-z]/.test(ch)) {
      chars[i] = String.fromCharCode(ch.charCodeAt(0) - 32); // paragraph[i] = paragraph[i]-32
      flag = false;
    }

    // After sentence-ending punctuation, capitalize next letter we see
    if (/[!?.]/.test(ch)) {
      flag = true;
    }
  }

  return chars.join("");
}

console.log(capitalize("this is a simple sentence."));
