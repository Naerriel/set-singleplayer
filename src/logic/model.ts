export enum CardShape {
  oval = 'oval',
  diamond = 'diamond',
  squiggle = 'squiggle',
}

export enum CardShading {
  open = 'open',
  striped = 'striped',
  solid = 'solid',
}

export enum CardColor {
  red = 'red',
  green = 'green',
  purple = 'purple',
}

export enum CardNumber {
  one = 1,
  two = 2,
  three = 3,
}

export enum CardProperties {
  shape = 'shape',
  shading = 'shading',
  color = 'color',
  number = 'number',
}

export interface Card {
  [CardProperties.shape]: CardShape;
  [CardProperties.shading]: CardShading;
  [CardProperties.color]: CardColor;
  [CardProperties.number]: CardNumber;
  id: number;
}
