import React from 'react';

  const getWeatherIconUrl = (code, timeOfDay) => {
    const iconMapping = {
        1000: {
          day: '113.png',
          night: '113.png',
        },
        1003: {
          day: '116.png',
          night: '116.png',
        },
        1006: {
          day: '119.png',
          night: '119.png',
        },
        1009: {
          day: '122.png',
          night: '122.png',
        },
        1030: {
          day: '143.png',
          night: '143.png',
        },
        1063: {
          day: '176.png',
          night: '176.png',
        },
        1066: {
          day: '179.png',
          night: '179.png',
        },
        1069: {
          day: '182.png',
          night: '182.png',
        },
        1072: {
          day: '185.png',
          night: '185.png',
        },
        1087: {
          day: '200.png',
          night: '200.png',
        },
        1114: {
          day: '227.png',
          night: '227.png',
        },
        1117: {
          day: '230.png',
          night: '230.png',
        },
        1135: {
          day: '248.png',
          night: '248.png',
        },
        1147: {
          day: '260.png',
          night: '260.png',
        },
        1150: {
          day: '263.png',
          night: '263.png',
        },
        1153: {
          day: '266.png',
          night: '266.png',
        },
        1168: {
          day: '281.png',
          night: '281.png',
        },
        1171: {
          day: '284.png',
          night: '284.png',
        },
        1180: {
          day: '293.png',
          night: '293.png',
        },
        1183: {
          day: '296.png',
          night: '296.png',
        },
        1186: {
          day: '299.png',
          night: '299.png',
        },
        1189: {
          day: '302.png',
          night: '302.png',
        },
        1192: {
          day: '305.png',
          night: '305.png',
        },
        1195: {
          day: '308.png',
          night: '308.png',
        },
        1198: {
          day: '311.png',
          night: '311.png',
        },
        1201: {
          day: '314.png',
          night: '314.png',
        },
        1204: {
          day: '317.png',
          night: '317.png',
        },
        1207: {
          day: '320.png',
          night: '320.png',
        },
        1210: {
          day: '323.png',
          night: '323.png',
        },
        1213: {
          day: '326.png',
          night: '326.png',
        },
        1216: {
          day: '329.png',
          night: '329.png',
        },
        1219: {
          day: '332.png',
          night: '332.png',
        },
        1222: {
          day: '335.png',
          night: '335.png',
        },
        1225: {
          day: '338.png',
          night: '338.png',
        },
        1237: {
          day: '350.png',
          night: '350.png',
        },
        1240: {
          day: '353.png',
          night: '353.png',
        },
        1243: {
          day: '356.png',
          night: '356.png',
        },
        1246: {
          day: '359.png',
          night: '359.png',
        },
        1249: {
          day: '362.png',
          night: '362.png',
        },
        1252: {
          day: '365.png',
          night: '365.png',
        },
        1255: {
          day: '368.png',
          night: '368.png',
        },
        1258: {
          day: '371.png',
          night: '371.png',
        },
        1261: {
          day: '374.png',
          night: '374.png',
        },
        1264: {
          day: '377.png',
          night: '377.png',
        },
        1273: {
          day: '386.png',
          night: '386.png',
        },
        1276: {
          day: '389.png',
          night: '389.png',
        },
        1279: {
          day: '392.png',
          night: '392.png',
        },
        1282: {
          day: '395.png',
          night: '395.png',
        },
      };

    const conditionMapping = {
        1000: {
            day: 'Sunny',
            night: 'Clear',
        },
        1003: {
            day: 'Partly cloudy',
            night: 'Partly cloudy',
          },
        1006: {
            day: 'Cloudy',
            night: 'Cloudy',
          },
        1009: {
            day: 'Overcast',
            night: 'Overcast',
          },
        1030: {
            day: 'Mist',
            night: 'Mist',
          },
        1063: {
            day: 'Patchy rain possible',
            night: 'Patchy rain possible',
          },
          1066: {
            day: 'Patchy snow possible',
            night: 'Patchy snow possible',
          },
          1069: {
            day: 'Patchy sleet possible',
            night: 'Patchy sleet possible',
          },
          1072: {
            day: 'Patchy freezing drizzle possible',
            night: 'Patchy freezing drizzle possible',
          },
          1087: {
            day: 'Thundery outbreaks possible',
            night: 'Thundery outbreaks possible',
          },
          1114: {
            day: 'Blowing snow',
            night: 'Blowing snow',
          },
          1117: {
            day: 'Blizzard',
            night: 'Blizzard',
          },
          1135: {
            day: 'Fog',
            night: 'Fog',
          },
          1147: {
            day: 'Freezing fog',
            night: 'Freezing fog',
          },
          1150: {
            day: 'Patchy light drizzle',
            night: 'Patchy light drizzle',
          },
          1153: {
            day: 'Light drizzle',
            night: 'Light drizzle',
          },
          1168: {
            day: 'Freezing drizzle',
            night: 'Freezing drizzle',
          },
          1171: {
            day: 'Heavy freezing drizzle',
            night: 'Heavy freezing drizzle',
          },
          1180: {
            day: 'Patchy light rain',
            night: 'Patchy light rain',
          },
          1183: {
            day: 'Light rain',
            night: 'Light rain',
          },
          1186: {
            day: 'Moderate rain at times',
            night: 'Moderate rain at times',
          },
          1189: {
            day: 'Moderate rain',
            night: 'Moderate rain',
          },
          1192: {
            day: 'Heavy rain at times',
            night: 'Heavy rain at times',
          },
          1195: {
            day: 'Heavy rain',
            night: 'Heavy rain',
          },
          1198: {
            day: 'Light freezing rain',
            night: 'Light freezing rain',
          },
          1201: {
            day: 'Moderate or heavy freezing rain',
            night: 'Moderate or heavy freezing rain',
          },
          1204: {
            day: 'Light sleet',
            night: 'Light sleet',
          },
          1207: {
            day: 'Moderate or heavy sleet',
            night: 'Moderate or heavy sleet',
          },
          1210: {
            day: 'Patchy light snow',
            night: 'Patchy light snow',
          },
          1213: {
            day: 'Light snow',
            night: 'Light snow',
          },
          1216: {
            day: 'Patchy moderate snow',
            night: 'Patchy moderate snow',
          },
          1219: {
            day: 'Moderate snow',
            night: 'Moderate snow',
          },
          1222: {
            day: 'Patchy heavy snow',
            night: 'Patchy heavy snow',
          },
          1225: {
            day: 'Heavy snow',
            night: 'Heavy snow',
          },
          1237: {
            day: 'Ice pellets',
            night: 'Ice pellets',
          },
          1240: {
            day: 'Light rain shower',
            night: 'Light rain shower',
          },
          1243: {
            day: 'Moderate or heavy rain shower',
            night: 'Moderate or heavy rain shower',
          },
          1246: {
            day: 'Torrential rain shower',
            night: 'Torrential rain shower',
          },
          1249: {
            day: 'Light sleet showers',
            night: 'Light sleet showers',
          },
          1252: {
            day: 'Moderate or heavy sleet showers',
            night: 'Moderate or heavy sleet showers',
          },
          1255: {
            day: 'Light snow showers',
            night: 'Light snow showers',
          },
          1258: {
            day: 'Moderate or heavy snow showers',
            night: 'Moderate or heavy snow showers',
          },
          1261: {
            day: 'Light showers of ice pellets',
            night: 'Light showers of ice pellets',
          },
          1264: {
            day: 'Moderate or heavy showers of ice pellets',
            night: 'Moderate or heavy showers of ice pellets',
          },
          1273: {
            day: 'Patchy light rain with thunder',
            night: 'Patchy light rain with thunder',
          },
          1276: {
            day: 'Moderate or heavy rain with thunder',
            night: 'Moderate or heavy rain with thunder',
          },
          1279: {
            day: 'Patchy light snow with thunder',
            night: 'Patchy light snow with thunder',
          },
          1282: {
            day: 'Moderate or heavy snow with thunder',
            night: 'Moderate or heavy snow with thunder',
          },
        };

        const fileName = (iconMapping[code] && iconMapping[code][timeOfDay]) || 'default.png';

        return {
          iconUrl: `/weather/${timeOfDay}/${fileName}`,
          condition: (conditionMapping[code] && conditionMapping[code][timeOfDay]) || 'Unknown',
        };
      };
      
      const WeatherIcon = ({ code, isDay }) => {
        const timeOfDay = isDay ? 'day' : 'night';
        const { iconUrl, condition } = getWeatherIconUrl(code, timeOfDay);
      
        return (
          <div>
            <img src={iconUrl} alt={`Weather Icon for code ${code}`} />
            <p>{condition}</p>
          </div>
        );
      };
      
      export default WeatherIcon;