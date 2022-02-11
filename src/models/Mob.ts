type MobBasicData = {
  level: number;
  hp: number;
  mp: number;
  exp: number;
}

type MobStats = {
  speed: number;
  physicalDamage: number;
  physicalDefense: number;
  magicDefense: number;
  magicDamage: number;
  accuracy: number;
  evasion: number;
}

export type Mob = {
  id: number;
  name: string;
  basicData: MobBasicData
  stats: MobStats;
  foundAt: number[];
}

export type APIMob = {
  id: number;
  meta: any;
  name: string;
  description: string;
  framebooks: any;
  foundAt: number[];
}

export type APIMobSearchResult = {
  id: number;
  name: string;
  level: number;
  isBoss: boolean;
}