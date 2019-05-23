export function inputIsValid(inputValue) {
  let isWhitespace = (inputValue || '').trim().length === 0;
  let isValid = !isWhitespace;
  return isValid;
}

export function getElementsByAttribute(
  oElm,
  strTagName,
  strAttributeName,
  strAttributeValue
) {
  var arrElements =
    strTagName === '*' && oElm.all
      ? oElm.all
      : oElm.getElementsByTagName(strTagName);
  var arrReturnElements = [];
  var oAttributeValue =
    typeof strAttributeValue !== 'undefined'
      ? new RegExp('(^|\\s)' + strAttributeValue + '(\\s|$)', 'i')
      : null;
  var oCurrent;
  var oAttribute;
  for (var i = 0; i < arrElements.length; i++) {
    oCurrent = arrElements[i];
    oAttribute =
      oCurrent.getAttribute && oCurrent.getAttribute(strAttributeName);
    if (typeof oAttribute === 'string' && oAttribute.length > 0) {
      if (
        typeof strAttributeValue === 'undefined' ||
        (oAttributeValue && oAttributeValue.test(oAttribute))
      ) {
        arrReturnElements.push(oCurrent);
      }
    }
  }
  return arrReturnElements;
}
