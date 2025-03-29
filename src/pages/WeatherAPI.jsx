import React, { useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';

const WeatherAPI = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          latitude: 54.544587,
          longitude: 10.227487,
          current: [
            'wave_height',
            'wave_direction',
            'ocean_current_velocity',
            'sea_level_height_msl',
            'ocean_current_direction',
            'wind_wave_direction',
            'wind_wave_height',
            'swell_wave_height',
            'swell_wave_direction',
          ],
        };
        const url = 'https://marine-api.open-meteo.com/v1/marine';
        const responses = await fetchWeatherApi(url, params);

        // Process the first location
        const response = responses[0];
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const current = response.current();

        // Map the weather data
        const data = {
          current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            waveHeight: current.variables(0).value(),
            waveDirection: current.variables(1).value(),
            oceanCurrentVelocity: current.variables(2).value(),
            seaLevelHeightMsl: current.variables(3).value(),
            oceanCurrentDirection: current.variables(4).value(),
            windWaveDirection: current.variables(5).value(),
            windWaveHeight: current.variables(6).value(),
            swellWaveHeight: current.variables(7).value(),
            swellWaveDirection: current.variables(8).value(),
          },
        };

        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Weather Data</h1>
      <p>Time: {weatherData.current.time.toString()}</p>
      <p>Wave Height: {weatherData.current.waveHeight} m</p>
      <p>Wave Direction: {weatherData.current.waveDirection}°</p>
      <p>Ocean Current Velocity: {weatherData.current.oceanCurrentVelocity} m/s</p>
      <p>Sea Level Height (MSL): {weatherData.current.seaLevelHeightMsl} m</p>
      <p>Ocean Current Direction: {weatherData.current.oceanCurrentDirection}°</p>
      <p>Wind Wave Direction: {weatherData.current.windWaveDirection}°</p>
      <p>Wind Wave Height: {weatherData.current.windWaveHeight} m</p>
      <p>Swell Wave Height: {weatherData.current.swellWaveHeight} m</p>
      <p>Swell Wave Direction: {weatherData.current.swellWaveDirection}°</p>
    </div>
  );
};

export default WeatherAPI;