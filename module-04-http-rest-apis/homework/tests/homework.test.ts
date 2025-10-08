// Module 04 Homework Tests
// These tests verify your Weather API Client implementation

import {
  CurrentWeather,
  WeatherForecast,
  City,
} from '../starter/types';

// Import the WeatherClient class
// Note: Students need to export the class for testing
let WeatherClient: any;

try {
  const module = require('../starter/index');
  WeatherClient = module.WeatherClient;
} catch (error) {
  console.error('Error loading WeatherClient:', error);
}

describe('Module 04: Weather API Client', () => {
  let client: any;

  beforeEach(() => {
    if (WeatherClient) {
      client = new WeatherClient();
    }
  });

  describe('Part 1: TypeScript Types', () => {
    test('CurrentWeather interface should be defined', () => {
      // Check that the type can be imported
      const weather: CurrentWeather = {
        temperature: 15.3,
        windspeed: 10.5,
        winddirection: 270,
        weathercode: 3,
        time: '2025-01-15T12:00',
      };
      expect(weather).toBeDefined();
      expect(weather.temperature).toBe(15.3);
    });

    test('WeatherForecast interface should be defined', () => {
      const forecast: WeatherForecast = {
        daily: {
          time: ['2025-01-15'],
          temperature_2m_max: [15.3],
          temperature_2m_min: [8.1],
          precipitation_sum: [0.0],
        },
      };
      expect(forecast).toBeDefined();
      expect(forecast.daily.time).toHaveLength(1);
    });

    test('City interface should be defined', () => {
      const city: City = {
        name: 'New York',
        latitude: 40.71,
        longitude: -74.01,
        country: 'United States',
      };
      expect(city).toBeDefined();
      expect(city.name).toBe('New York');
    });
  });

  describe('Part 2: WeatherClient Class', () => {
    test('WeatherClient class should be exported', () => {
      expect(WeatherClient).toBeDefined();
      expect(typeof WeatherClient).toBe('function');
    });

    test('WeatherClient should be instantiable', () => {
      expect(client).toBeDefined();
      expect(client).toBeInstanceOf(WeatherClient);
    });

    test('WeatherClient should have getCurrentWeather method', () => {
      expect(client.getCurrentWeather).toBeDefined();
      expect(typeof client.getCurrentWeather).toBe('function');
    });

    test('WeatherClient should have getWeatherForecast method', () => {
      expect(client.getWeatherForecast).toBeDefined();
      expect(typeof client.getWeatherForecast).toBe('function');
    });

    test('WeatherClient should have searchCity method', () => {
      expect(client.searchCity).toBeDefined();
      expect(typeof client.searchCity).toBe('function');
    });
  });

  describe('Part 3: getCurrentWeather Method', () => {
    test('should fetch current weather for valid coordinates', async () => {
      // NYC coordinates
      const weather = await client.getCurrentWeather(40.7128, -74.006);

      expect(weather).toBeDefined();
      expect(weather.temperature).toBeDefined();
      expect(typeof weather.temperature).toBe('number');
      expect(weather.windspeed).toBeDefined();
      expect(typeof weather.windspeed).toBe('number');
      expect(weather.weathercode).toBeDefined();
      expect(typeof weather.weathercode).toBe('number');
    }, 10000); // 10 second timeout for API call

    test('should throw error for invalid latitude', async () => {
      await expect(client.getCurrentWeather(999, 0)).rejects.toThrow();
    });

    test('should throw error for invalid longitude', async () => {
      await expect(client.getCurrentWeather(0, 999)).rejects.toThrow();
    });

    test('should handle different valid coordinates', async () => {
      // London coordinates
      const weather = await client.getCurrentWeather(51.5074, -0.1278);

      expect(weather).toBeDefined();
      expect(weather.temperature).toBeDefined();
    }, 10000);
  });

  describe('Part 4: getWeatherForecast Method', () => {
    test('should fetch 7-day forecast by default', async () => {
      const forecast = await client.getWeatherForecast(40.7128, -74.006);

      expect(forecast).toBeDefined();
      expect(forecast.daily).toBeDefined();
      expect(forecast.daily.time).toBeDefined();
      expect(Array.isArray(forecast.daily.time)).toBe(true);
      expect(forecast.daily.time.length).toBe(7);
      expect(forecast.daily.temperature_2m_max).toBeDefined();
      expect(forecast.daily.temperature_2m_max.length).toBe(7);
    }, 10000);

    test('should fetch custom number of days', async () => {
      const forecast = await client.getWeatherForecast(40.7128, -74.006, 3);

      expect(forecast).toBeDefined();
      expect(forecast.daily.time.length).toBe(3);
      expect(forecast.daily.temperature_2m_max.length).toBe(3);
      expect(forecast.daily.temperature_2m_min.length).toBe(3);
      expect(forecast.daily.precipitation_sum.length).toBe(3);
    }, 10000);

    test('should throw error for invalid days parameter', async () => {
      await expect(
        client.getWeatherForecast(40.7128, -74.006, 0)
      ).rejects.toThrow();

      await expect(
        client.getWeatherForecast(40.7128, -74.006, 20)
      ).rejects.toThrow();
    });

    test('should include all required forecast fields', async () => {
      const forecast = await client.getWeatherForecast(40.7128, -74.006, 1);

      expect(forecast.daily.time).toBeDefined();
      expect(forecast.daily.temperature_2m_max).toBeDefined();
      expect(forecast.daily.temperature_2m_min).toBeDefined();
      expect(forecast.daily.precipitation_sum).toBeDefined();

      // All arrays should have same length
      const length = forecast.daily.time.length;
      expect(forecast.daily.temperature_2m_max.length).toBe(length);
      expect(forecast.daily.temperature_2m_min.length).toBe(length);
      expect(forecast.daily.precipitation_sum.length).toBe(length);
    }, 10000);
  });

  describe('Part 5: searchCity Method', () => {
    test('should find a city by name', async () => {
      const city = await client.searchCity('London');

      expect(city).toBeDefined();
      expect(city).not.toBeNull();
      expect(city.name).toBeDefined();
      expect(city.latitude).toBeDefined();
      expect(city.longitude).toBeDefined();
      expect(city.country).toBeDefined();
      expect(typeof city.latitude).toBe('number');
      expect(typeof city.longitude).toBe('number');
    }, 10000);

    test('should return null for non-existent city', async () => {
      const city = await client.searchCity('NonExistentCityXYZ12345');

      expect(city).toBeNull();
    }, 10000);

    test('should handle different city names', async () => {
      const paris = await client.searchCity('Paris');
      expect(paris).toBeDefined();
      expect(paris?.name).toContain('Paris');

      const tokyo = await client.searchCity('Tokyo');
      expect(tokyo).toBeDefined();
      expect(tokyo?.name).toContain('Tokyo');
    }, 15000);

    test('should throw error for empty city name', async () => {
      await expect(client.searchCity('')).rejects.toThrow();
    });
  });

  describe('Part 6: Error Handling', () => {
    test('should validate latitude range (-90 to 90)', async () => {
      await expect(client.getCurrentWeather(-91, 0)).rejects.toThrow();
      await expect(client.getCurrentWeather(91, 0)).rejects.toThrow();
    });

    test('should validate longitude range (-180 to 180)', async () => {
      await expect(client.getCurrentWeather(0, -181)).rejects.toThrow();
      await expect(client.getCurrentWeather(0, 181)).rejects.toThrow();
    });

    test('should handle network errors gracefully', async () => {
      // This test checks that errors are properly propagated
      // We can't easily simulate network errors, but we can check invalid coordinates
      await expect(client.getCurrentWeather(100, 200)).rejects.toThrow();
    });
  });

  describe('Part 7: Integration Tests', () => {
    test('should search city and get its weather', async () => {
      // Find New York
      const city = await client.searchCity('New York');
      expect(city).toBeDefined();
      expect(city).not.toBeNull();

      // Get weather for New York
      const weather = await client.getCurrentWeather(
        city.latitude,
        city.longitude
      );
      expect(weather).toBeDefined();
      expect(weather.temperature).toBeDefined();
    }, 15000);

    test('should search city and get its forecast', async () => {
      // Find London
      const city = await client.searchCity('London');
      expect(city).toBeDefined();

      // Get forecast for London
      const forecast = await client.getWeatherForecast(
        city.latitude,
        city.longitude,
        3
      );
      expect(forecast).toBeDefined();
      expect(forecast.daily.time.length).toBe(3);
    }, 15000);
  });

  describe('Part 8: Data Validation', () => {
    test('current weather should have valid data types', async () => {
      const weather = await client.getCurrentWeather(40.7128, -74.006);

      expect(typeof weather.temperature).toBe('number');
      expect(typeof weather.windspeed).toBe('number');
      expect(typeof weather.winddirection).toBe('number');
      expect(typeof weather.weathercode).toBe('number');
      expect(typeof weather.time).toBe('string');

      // Temperature should be reasonable (-100 to 100°C)
      expect(weather.temperature).toBeGreaterThan(-100);
      expect(weather.temperature).toBeLessThan(100);

      // Wind speed should be non-negative
      expect(weather.windspeed).toBeGreaterThanOrEqual(0);

      // Wind direction should be 0-360
      expect(weather.winddirection).toBeGreaterThanOrEqual(0);
      expect(weather.winddirection).toBeLessThanOrEqual(360);
    }, 10000);

    test('forecast should have consistent array lengths', async () => {
      const forecast = await client.getWeatherForecast(40.7128, -74.006, 5);

      const timeLength = forecast.daily.time.length;
      expect(forecast.daily.temperature_2m_max.length).toBe(timeLength);
      expect(forecast.daily.temperature_2m_min.length).toBe(timeLength);
      expect(forecast.daily.precipitation_sum.length).toBe(timeLength);

      // Check that dates are in ISO format
      forecast.daily.time.forEach((date: string) => {
        expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      });
    }, 10000);

    test('city search should return valid coordinates', async () => {
      const city = await client.searchCity('Berlin');

      if (city) {
        expect(city.latitude).toBeGreaterThanOrEqual(-90);
        expect(city.latitude).toBeLessThanOrEqual(90);
        expect(city.longitude).toBeGreaterThanOrEqual(-180);
        expect(city.longitude).toBeLessThanOrEqual(180);
      }
    }, 10000);
  });
});
