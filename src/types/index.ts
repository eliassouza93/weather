export type DiasType = {
  dia: string;
  clima: string;
  tempMax: number;
  tempMin: number;
  chuva: number;
  vento: number;
  score: number;
  nomeDoDia: string;
};

export interface DiasProps {
  props: DiasType;
  isBest?: boolean;
}

export type DiaType = {
  dia: string;
  clima: string;
  score: string;
};
