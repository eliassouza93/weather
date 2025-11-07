import { useEffect, useState } from "react";
import axios from "axios";

import { DiasDaSemana } from "../components/ListaDiaSemana";
import {
  Container,
  Title,
  Subtitle,
  BestDayText,
  Table,
  THead,
  TBody,
  LoadingWrapper,
  Spinner,
  LoadingText,
  ContainerAviso,
} from "./styles";
import type { DiaType } from "../types";
import { httpUrl } from "../utils/httpUrl";
import ListaTitulosDias from "../components/ListaTituloDias";

const iconesClima = {
  sol: "☀️",
  nuvem: "☁️",
  chuva: "🌧️",
};

export function HomePage() {
  const [dias, setDias] = useState([]);
  const [melhorDia, setMelhorDia] = useState<DiaType | null>(null);
  const [piorDia, setPiorDia] = useState<DiaType | null>(null);

  useEffect(() => {
    axios
      .get(httpUrl)
      .then((res) => {
        const dados = res.data.daily;
        const diasSemana = dados.time.map((dia: string, i: string) => {
          const chuva = dados.precipitation_sum[i];
          const vento = dados.windspeed_10m_max[i];
          const tempMax = dados.temperature_2m_max[i];
          let score = 0;
          if (chuva === 0) score += 3;
          if (tempMax >= 20 && tempMax <= 30) score += 2;
          if (vento <= 15) score += 1;

          let clima = iconesClima.sol;
          if (chuva > 0) clima = iconesClima.chuva;
          else if (tempMax < 20 || tempMax > 30) clima = iconesClima.nuvem;

          return {
            dia: formatarData(dia),
            nomeDoDia: obterNomeDia(dia),
            tempMax,
            tempMin: dados.temperature_2m_min[i],
            chuva,
            vento,
            score,
            clima,
          };
        });

        const melhor = [...diasSemana].sort((a, b) => b.score - a.score)[0];
        const pior = [...diasSemana].sort((a, b) => b.score + a.score)[0];

        setDias(diasSemana);
        setMelhorDia(melhor);
        setPiorDia(pior);
      })
      .catch(console.error);
  }, []);

  function formatarData(data: string) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}-${mes}-${ano}`;
  }

  function obterNomeDia(data: string) {
    const diasSemana = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    const [ano, mes, dia] = data.split("-");
    const dateObj = new Date(Number(ano), Number(mes) - 1, Number(dia));
    return diasSemana[dateObj.getDay()];
  }

  if (dias.length === 0)
    return (
      <LoadingWrapper>
        <Spinner />
        <LoadingText>Carregando previsão...</LoadingText>
      </LoadingWrapper>
    );

  return (
    <Container>
      <Title>Melhor dia para lavar roupa em Florianópolis</Title>

      {melhorDia && (
        <BestDayText>
          <strong>{melhorDia.dia}</strong> ({melhorDia.clima}) - Pontuação:{" "}
          {melhorDia.score}
        </BestDayText>
      )}

      <ContainerAviso>
        <p className="melhor">🌤️ Melhor dia: {melhorDia?.dia}</p>
        <p className="pior">🌧️ Pior dia: {piorDia?.dia}</p>
      </ContainerAviso>

      <Subtitle>Previsão semanal</Subtitle>

      <Table>
        <THead>
          <ListaTitulosDias />
        </THead>
        <TBody>
          {dias.map((d, i) => (
            <DiasDaSemana
              key={i}
              props={d}
              isBest={d === melhorDia}
              piorDia={d === piorDia}
            />
          ))}
        </TBody>
      </Table>
    </Container>
  );
}
