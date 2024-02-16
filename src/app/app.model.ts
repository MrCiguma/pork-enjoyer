export enum OasisType {
  Single50,
  Single,
  Double,
}

export interface Map {
  tiles: Tile[];
}

export interface Tile {
  position: Position;
  did: number;
  title: string;
  text: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface Oasis {
  position: Position;
  type: OasisType;
  lastHit: Date;
  currentRes: number;
  animals: Animal[];
}

export interface Animal {
  id: number;
  count: number;
}

export interface AnimalData {
  id: number;
  name: string;
  cavDeff: number;
  res: number;
}
