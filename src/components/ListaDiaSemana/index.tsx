import { TD, TDAY, TR } from "../../page/styles";
import type { DiasProps } from "../../types";

export function DiasDaSemana({ props, isBest, isNotDay }: DiasProps) {
  return (
    <TR isBest={isBest} piorDia={isNotDay}>
      <TD>
        <TDAY>
          {props.nomeDoDia}
          <span className="responsiveClass">-</span>
          <span className="responsiveClass">{props.dia}</span>
        </TDAY>
      </TD>
      <TD>{props.clima}</TD>
      <TD>{props.tempMax.toFixed(0)}</TD>
      <TD>{props.tempMin.toFixed(0)}</TD>
      <TD>{props.chuva.toFixed(0)}</TD>
      <TD>{props.vento.toFixed(0)}</TD>
      <TD>{props.score}</TD>
    </TR>
  );
}
