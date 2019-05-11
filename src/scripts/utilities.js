export function inputIsValid(inputValue) {
  let isWhitespace = (inputValue || '').trim().length === 0;
  let isValid = !isWhitespace;
  return isValid;
}
