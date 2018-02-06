// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts

export function pointerCoord (event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    const changedTouches = event.changedTouches
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0]
      return { x: touch.clientX, y: touch.clientY }
    }
    const pageX = event.pageX
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY }
    }
  }
  return { x: 0, y: 0 }
}

export function checkForLabel (toggleContainer, input) {
  return (hasParentLabel(toggleContainer, 'LABEL') || hasIdThatMatchesLabelFor(input) || hasAriaLabelOrAriaLabelledbyAttr(input)) ||
  console.warn('There seems to not be any associated label for the react-toggle element.  https://www.w3.org/standards/webdesign/accessibility')
}

export function hasParentLabel (element, tagName) {
  return (element.parentNode && element.parentNode.nodeName === tagName)
    ? true
    : (!element.parentNode)
      ? false
      : hasParentLabel(element.parentNode, tagName)
}

export function hasIdThatMatchesLabelFor (element, document = window.document) {
  return element.id
    ? Array.from(document.querySelectorAll('label')).some(label => label.htmlFor === element.id)
    : false
}

export function hasAriaLabelOrAriaLabelledbyAttr (element) {
  return !!element.getAttribute('aria-label') || !!element.getAttribute('aria-labelledby')
}
