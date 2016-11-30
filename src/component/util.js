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
