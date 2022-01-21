import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Figure } from "react-bootstrap";
import "./figureElTiempo.css";
import { useQuery } from "react-query";

function ElTiempo() {
  const { data, isLoading, isError } = useQuery("elTiempo", async () => {
    const response = await fetch(
      "https://prevision-meteo.ch/services/json/neuchatel"
    );
    const data = await response.json();
    return data;
  });

  return data ? (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="El tiempo"
        src={data?.current_condition?.icon_big}
      />
      <Figure.Caption className="weather">{data.city_info.name}</Figure.Caption>
      <Figure.Caption className="weather">
        {data.current_condition?.tmp}º C
      </Figure.Caption>
    </Figure>
  ) : null;
}

export default ElTiempo;
