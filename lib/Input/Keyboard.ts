import { Direction } from 'Rpg/common/enum/direction'

export enum KeyboardEvents {
  KEYDOWN = 'keydown',
  KEYUP = 'keyup',
  KEYPRESS = 'keypress'
}

const keys: { [key: string]: Direction } = {
  37: Direction.LEFT,
  38: Direction.UP,
  39: Direction.RIGHT,
  40: Direction.DOWN
}

type KeyboardObserverFn = (direction: Direction | string) => void

class KeyboardEventSource {
  subscribers: {
    [eventType: string]: KeyboardObserverFn[]
  } = {
    [KeyboardEvents.KEYUP]: [],
    [KeyboardEvents.KEYDOWN]: [],
    [KeyboardEvents.KEYPRESS]: []
  }
  constructor() {
    Object.keys(this.subscribers).forEach(eventKey =>
      document.addEventListener(eventKey, (event: KeyboardEvent) => {
        this.subscribers[eventKey].forEach(fn => {
          if (keys[event.keyCode]) {
            fn(keys[event.keyCode])
          }
        })
      })
    )
  }

  press = (fn: KeyboardObserverFn) => {
    this.subscribers[KeyboardEvents.KEYPRESS] = [
      ...(this.subscribers[KeyboardEvents.KEYPRESS] || []),
      fn
    ]
  }

  down = (fn: KeyboardObserverFn) => {
    this.subscribers[KeyboardEvents.KEYDOWN] = [
      ...(this.subscribers[KeyboardEvents.KEYDOWN] || []),
      fn
    ]
  }

  up = (fn: KeyboardObserverFn) => {
    this.subscribers[KeyboardEvents.KEYUP] = [
      ...(this.subscribers[KeyboardEvents.KEYUP] || []),
      fn
    ]
  }
}

const Keyboard = new KeyboardEventSource()

export default Keyboard
