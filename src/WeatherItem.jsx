const WeatherItem = (props) => {
  return (
    <div className="weatherItem">
      <h2>{props.weatherItem.stacja}</h2>
      <p>Temperatura: {props.weatherItem.temperatura} st. C.</p>
      <p>
        Ciśnienie:{" "}
        {props.weatherItem.cisnienie
          ? props.weatherItem.cisnienie + "hPa"
          : "brak danych"}{" "}
      </p>
      <p>Prędkość wiatru: {props.weatherItem.predkosc_wiatru} km/h </p>
      <p>Suma Opadu: {props.weatherItem.suma_opadu} </p>
      <p>
        {" "}
        {!props.weatherItem.suma_opadu &&
          "istnieje dlatego, bo istnieje lewa strona "}{" "}
      </p>
    </div>
  );
};

export default WeatherItem;
