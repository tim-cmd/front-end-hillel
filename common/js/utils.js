function interpolate(template, obj) {
  for (key in obj) {
    template = template.replaceAll(`{${key}}`, obj[key]);
  }

  return template;
}

function isInputInvalid(el) {
  const isInvalid = el.value === null || el.value === '';
  el.setCustomValidity(isInvalid ? 'Please enter a title' : '');

  return isInvalid;
}
