# Module 04 Homework: Weather API Client

**Objective:** Build a complete TypeScript API client for a weather service
**Estimated Time:** 2-3 hours
**Difficulty:** ⭐⭐ (Intermediate)

## Overview

You'll create a weather API client that fetches real weather data from the Open-Meteo API, a free weather API that requires no API key. This will demonstrate your understanding of HTTP requests, TypeScript types, error handling, and API client design.

## What You'll Build

A `WeatherClient` class with methods like:
```typescript
const client = new WeatherClient();

// Get current weather for a city
const weather = await client.getCurrentWeather(40.7128, -74.0060); // NYC

// Get 7-day forecast
const forecast = await client.getWeatherForecast(40.7128, -74.0060);

// Search for city coordinates
const coordinates = await client.searchCity('New York');
```

## About Open-Meteo API

Open-Meteo (https://open-meteo.com/) provides:
- Free weather data (no API key needed!)
- Current weather conditions
- Weather forecasts
- Historical weather data
- Geocoding (city name to coordinates)

### Example API Calls

```bash
# Current weather
https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true

# 7-day forecast
https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America/New_York

# City search
https://geocoding-api.open-meteo.com/v1/search?name=New%20York&count=1
```

## Requirements

Your implementation must include:

### Part 1: TypeScript Types
- [ ] Define `CurrentWeather` interface for current weather data
- [ ] Define `WeatherForecast` interface for forecast data
- [ ] Define `City` interface for geocoding results
- [ ] Use proper TypeScript types throughout (no `any`)

### Part 2: WeatherClient Class
- [ ] Create `WeatherClient` class with proper TypeScript
- [ ] Implement `getCurrentWeather(latitude, longitude)` method
- [ ] Implement `getWeatherForecast(latitude, longitude, days?)` method
- [ ] Implement `searchCity(cityName)` method
- [ ] Use a private `request<T>()` helper method for all API calls

### Part 3: Error Handling
- [ ] Check `response.ok` and throw errors for failed requests
- [ ] Validate input parameters (latitude, longitude, city name)
- [ ] Provide helpful error messages
- [ ] Handle network errors gracefully

### Part 4: Features
- [ ] Support configurable forecast length (default 7 days)
- [ ] Parse and return only relevant data from API responses
- [ ] Use TypeScript generics for type safety
- [ ] Include JSDoc comments for public methods

## Getting Started

1. Navigate to the `starter/` directory
2. Review the provided type definitions in `types.ts`
3. Implement the `WeatherClient` class in `index.ts`
4. Test your implementation by running `npx ts-node index.ts`

## Starter Code Structure

```
homework/
├── README.md (this file)
├── starter/
│   ├── index.ts          # Main WeatherClient class (YOU COMPLETE THIS)
│   ├── types.ts          # TypeScript interfaces (YOU COMPLETE THIS)
│   ├── tsconfig.json     # TypeScript configuration
│   └── package.json      # Dependencies
└── tests/
    └── homework.test.ts  # Automated tests
```

## Implementation Steps

### Step 1: Define Types (types.ts)

Create TypeScript interfaces based on the API responses.

**Current Weather Response:**
```json
{
  "current_weather": {
    "temperature": 15.3,
    "windspeed": 10.5,
    "winddirection": 270,
    "weathercode": 3,
    "time": "2025-01-15T12:00"
  }
}
```

**Forecast Response:**
```json
{
  "daily": {
    "time": ["2025-01-15", "2025-01-16", ...],
    "temperature_2m_max": [15.3, 16.2, ...],
    "temperature_2m_min": [8.1, 9.0, ...],
    "precipitation_sum": [0.0, 2.5, ...]
  }
}
```

**Geocoding Response:**
```json
{
  "results": [
    {
      "name": "New York",
      "latitude": 40.71,
      "longitude": -74.01,
      "country": "United States"
    }
  ]
}
```

### Step 2: Implement WeatherClient (index.ts)

Follow the TODO comments to implement each method.

Key methods:
```typescript
class WeatherClient {
  private async request<T>(url: string): Promise<T>
  async getCurrentWeather(latitude: number, longitude: number): Promise<CurrentWeather>
  async getWeatherForecast(latitude: number, longitude: number, days?: number): Promise<WeatherForecast>
  async searchCity(cityName: string): Promise<City | null>
}
```

### Step 3: Test Your Implementation

The starter code includes a `main()` function with test cases:
```typescript
async function main() {
  const client = new WeatherClient();

  // Test 1: Current weather
  const weather = await client.getCurrentWeather(40.7128, -74.0060);
  console.log('NYC Temperature:', weather.temperature);

  // Test 2: Forecast
  const forecast = await client.getWeatherForecast(40.7128, -74.0060);
  console.log('7-day forecast:', forecast);

  // Test 3: City search
  const city = await client.searchCity('London');
  console.log('London coordinates:', city?.latitude, city?.longitude);
}
```

## Testing Your Homework

### Manual Testing
Run your code:
```bash
cd homework/starter
npm install
npx ts-node index.ts
```

### Automated Testing
Run the test suite:
```bash
npm run test:module-04
```

The tests check:
- TypeScript types are defined correctly
- Methods exist and have correct signatures
- API requests are made correctly
- Error handling works properly
- Data is parsed and returned correctly

## Success Criteria

Your homework is complete when:
- [ ] All TypeScript types are defined (no errors when compiling)
- [ ] All methods are implemented and return correct data
- [ ] Error handling works for invalid inputs
- [ ] All automated tests pass
- [ ] Code follows TypeScript best practices
- [ ] JSDoc comments are included

## Expected Output

When you run `npx ts-node index.ts`, you should see something like:

```
=== Test 1: Current Weather ===
NYC Current Weather:
  Temperature: 15.3°C
  Wind Speed: 10.5 km/h
  Weather Code: 3

=== Test 2: Weather Forecast ===
7-Day Forecast for NYC:
  Day 1: Max 15.3°C, Min 8.1°C, Precipitation: 0.0mm
  Day 2: Max 16.2°C, Min 9.0°C, Precipitation: 2.5mm
  ...

=== Test 3: City Search ===
Found city: London
  Latitude: 51.51
  Longitude: -0.13
  Country: United Kingdom

=== Test 4: Error Handling ===
Caught error: Invalid latitude (must be between -90 and 90)
```

## Tips for Success

### Understanding the API
- Test API endpoints in your browser first
- Look at the actual JSON responses
- Read the Open-Meteo documentation: https://open-meteo.com/en/docs

### TypeScript Best Practices
- Define interfaces before implementing methods
- Use proper types for function parameters and return values
- Use generics (`<T>`) for the request method
- Enable strict mode in tsconfig.json

### Error Handling
```typescript
// Validate inputs
if (latitude < -90 || latitude > 90) {
  throw new Error('Invalid latitude (must be between -90 and 90)');
}

// Check response
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
```

### Building URLs with Query Parameters
```typescript
const params = new URLSearchParams({
  latitude: latitude.toString(),
  longitude: longitude.toString(),
  current_weather: 'true',
});
const url = `${this.baseURL}?${params.toString()}`;
```

## Common Issues

### TypeScript Errors
If you see type errors, make sure:
- All interfaces are properly defined
- Return types match what you're actually returning
- You're not using `any` types

### API Errors
If API calls fail:
- Check your URL construction
- Verify latitude/longitude are valid numbers
- Test the URL in a browser to see the actual response

### Network Issues
If fetch doesn't work:
- Make sure you're using Node.js 18+
- Check your internet connection
- Verify the Open-Meteo API is accessible

## Bonus Challenges

If you finish early and want more practice:

### Bonus 1: Weather Descriptions
Map weather codes to human-readable descriptions:
```typescript
// 0 = Clear sky
// 1-3 = Partly cloudy
// 45, 48 = Fog
// etc.
getWeatherDescription(code: number): string
```

### Bonus 2: Temperature Units
Support Fahrenheit in addition to Celsius:
```typescript
getCurrentWeather(lat: number, lon: number, unit?: 'celsius' | 'fahrenheit')
```

### Bonus 3: Cache Results
Store results for 5 minutes to avoid redundant API calls:
```typescript
private cache: Map<string, { data: any; timestamp: number }>;
```

### Bonus 4: Historical Weather
Add method to get weather for a specific past date:
```typescript
getHistoricalWeather(lat: number, lon: number, date: string): Promise<HistoricalWeather>
```

## What You're Learning

This homework reinforces:
- Making HTTP GET requests with fetch
- Working with real-world APIs
- TypeScript interfaces and generics
- Error handling and validation
- Building reusable, maintainable code
- Reading API documentation
- Working with query parameters

## Getting Help

If you're stuck:
1. Review Lesson 4 (Making Requests)
2. Look at Exercise 3 (API Client) for similar patterns
3. Test API endpoints in your browser to understand responses
4. Check the Open-Meteo documentation
5. Ask for help in office hours

## Submission

When you're done:
1. Make sure all tests pass: `npm run test:module-04`
2. Commit your changes with a descriptive message
3. Push to your forked repository

## What's Next?

After completing this module, you'll move on to **Module 05: Nest.js Part 1**, where you'll flip the script and start **building** APIs instead of consuming them!

Good luck! This is a significant milestone in your backend journey.
