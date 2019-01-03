import { sign } from './sign'
import { Direction } from 'Rpg/common/enum/direction'

export type Vector2x1 = [number, number]

export const vector2Add = (a: Vector2x1, b: Vector2x1): Vector2x1 => [
  a[0] + b[0],
  a[1] + b[1]
]

export const vector2Subtract = (a: Vector2x1, b: Vector2x1): Vector2x1 => [
  a[0] - b[0],
  a[1] - b[1]
]

export const vector2Multiply = (a: Vector2x1, m: number): Vector2x1 => [
  a[0] * m,
  a[1] * m
]

export const vector2Unit = (a: Vector2x1): Vector2x1 => [sign(a[0]), sign(a[1])]

export const vector2IsZero = (a: Vector2x1): boolean => a[0] !== 0 || a[1] !== 0

const Xaxis: { [key: string]: Direction } = {
  '-1': Direction.LEFT,
  '1': Direction.RIGHT
}

const Yaxis: { [key: string]: Direction } = {
  '1': Direction.DOWN,
  '-1': Direction.UP
}

export const vectorToDirection = (v: Vector2x1): Direction =>
  Xaxis[v[0]] || Yaxis[v[1]]

const x = 'x'

export default x
