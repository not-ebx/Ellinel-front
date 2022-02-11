export type MSMap = {
  id: number;
  name: string;
  streetName: string;
  isReturnMap: boolean;
  returnMap: number;
  mapMark: string;
  miniMap: MiniMap;
  isSwim: boolean;
  isTown: boolean;
  portals: Portal[];
}

type MiniMap = {
  centerX: number;
  centerY: number;
  height: number;
  width: number;
  magnification: number;
  canvas: string; // Base64 string
}

type Portal = {
  portalName: string;
  toName: string;
  type: number;
  toMapName: MapName;
  returnMapName: MapName;
  x: number;
  y: number;
}

export type MapName = {
  id: string;
  name: string;
  streetName: string;
}