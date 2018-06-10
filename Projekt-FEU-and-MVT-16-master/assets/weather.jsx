(function getWeather () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        ReactDOM.render(
            <WeatherApp json={JSON.parse(this.responseText)} />,
            document.getElementById('weather-content')
        ); 
    }
  };
    
    
    
    
    let url = 'http://api.openweathermap.org/data/2.5/forecast?id=2711533&mode=json&units=metric&appid=c43b65c449aaafbb9f96169692dfd5cb';
    
  xhttp.open("GET", url, true);
  xhttp.send();
}());

let getWeatherTypeUrl = object => {
    switch(object) {
        case 'clear sky': return "assets/weatherGraphic/clearsky.jpg"
            break;
        case 'scattered clouds': return "assets/weatherGraphic/brokenclouds.jpg"
            break;
        case 'few clouds': return "assets/weatherGraphic/fewclouds.jpg"
            break;
        case 'broken clouds': return "assets/weatherGraphic/brokenclouds.jpg"
            break; 
        case 'light rain': return "assets/weatherGraphic/lightrain.jpg"
            break;
        case 'rain': return "assets/weatherGraphic/rain.jpg"
            break;
        case 'shower rain': return "assets/weatherGraphic/rain.jpg"
            break;
        case 'mist': return "assets/weatherGraphic/mist.jpg"
            break; 
        case 'thunderstorm': return "assets/weatherGraphic/thunder.jpg"
            break;
        case 'snow': return "assets/weatherGraphic/snow.jpg"
            break; 
        case 'overcast clouds': return "assets/weatherGraphic/fewclouds.jpg"
            break;
        default: return false
    }
}
class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.json)
        let weatherList = this.props.json.list;
        let weatherCity = this.props.json.city.name;
        let newList = weatherList.map((object, key) => {
            
            let time = object.dt_txt;
            let date = time.split(" ", 1);
            
            let d = new Date(date);
            
            
            let weekday = new Array(7);
                weekday[0] =  "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";
            
            let day = weekday[d.getDay()];
            
            console.log(date);
            if(Number(time.charAt(11)) == 1 && Number(time.charAt(12)) == 5) {
                let temp = Math.round(object.main.temp);
                let weatherDescription = object.weather[0].description;
                let cloudiness = object.clouds.all;
                console.log(weatherDescription);
                let weatherTypeUrl = getWeatherTypeUrl(weatherDescription);
                if (!weatherTypeUrl){
                    console.log(weatherTypeUrl);
                }
                return(  
                    <div className="weatherList" key={key}>
                      <p id="cityName">{weatherCity}</p>
                        <p className="weatherDate">{day}</p>
                        <img src={weatherTypeUrl} />
                        <p className="weatherDescription">{weatherDescription}<br/>Cloudiness: {cloudiness}%</p>
                        <p className="temperature">{temp}<span className="degree">&deg;C</span></p>
                    </div>
                    
                );
            }
        });
        return(
            <div>
                {newList}
            </div>
        );
    }
}
