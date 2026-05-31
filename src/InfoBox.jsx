import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";

const InfoBox = ({ info }) => {
  const COLD_URL =
    "https://images.unsplash.com/photo-1609667398982-2e1b9ae988ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1603810473930-67e7b6d24a3f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const cardKey = `${(info.city || "").trim().toLowerCase()}|${info.temp}|${info.humidity}|${info.weather}`;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <div className="outerBox">
          <Card key={cardKey} sx={{ maxWidth: 600 }} className="animatedCard">
            <CardActionArea>
              <div className="innerBox innerBox--media">
                <CardMedia
                  className="mediaBox animatedMedia"
                  component="img"
                  image={(() => {
                    const city = (info.city || "").trim().toLowerCase();

                    // City-specific images (fixed mapping)
                    const CITY_URLS = {
                      varanasi:
                        "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      delhi:
                        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      mumbai:
                        "https://images.unsplash.com/photo-1506086679525-e3592f2a5f92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      bengaluru:
                        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      kolkata:
                        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    };

                    if (city && CITY_URLS[city]) {
                      return CITY_URLS[city];
                    }

                    // Fallback to existing weather-based images for unknown cities
                    return info.humidity > 80
                      ? RAIN_URL
                      : info.temp > 15
                        ? HOT_URL
                        : COLD_URL;
                  })()}
                  alt="weather"
                />
              </div>

              <div className="innerBox innerBox--content">
                <CardContent className="contentBox animatedContent">
                  <div className="innerBox innerBox--title animatedTitle">
                    <Typography gutterBottom variant="h5" component="div">
                      {info.city}{" "}
                      {info.humidity > 80 ? (
                        <ThunderstormIcon />
                      ) : info.temp > 15 ? (
                        <SunnyIcon />
                      ) : (
                        <AcUnitIcon />
                      )}
                    </Typography>
                  </div>

                  <div className="innerBox innerBox--details">
                    <div className="metricsGrid animatedMetrics">
                      <div className="metricTile">
                        <div className="metricLabel">Temperature</div>
                        <div className="metricValue">{info.temp}&deg;C</div>
                      </div>
                      <div className="metricTile">
                        <div className="metricLabel">Humidity</div>
                        <div className="metricValue">{info.humidity}</div>
                      </div>
                      <div className="metricTile">
                        <div className="metricLabel">Min Temp</div>
                        <div className="metricValue">{info.tempMin}&deg;C</div>
                      </div>
                      <div className="metricTile">
                        <div className="metricLabel">Max Temp</div>
                        <div className="metricValue">{info.tempMax}&deg;C</div>
                      </div>
                      <div className="metricTile">
                        <div className="metricLabel">Sea Level</div>
                        <div className="metricValue">{info.seaLavel}</div>
                      </div>
                      <div className="metricTile">
                        <div className="metricLabel">Visibility</div>
                        <div className="metricValue">{info.visibility}</div>
                      </div>
                      <div className="metricTile">
                        <div className="metricLabel">Wind Speed</div>
                        <div className="metricValue">{info.windSpeed}</div>
                      </div>
                    </div>

                    <p className="feelText animatedFeel">
                      The weather can be described as <i>{info.weather}</i> and
                      feels like {info.feelsLike}&deg;C
                    </p>
                  </div>
                </CardContent>
              </div>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
