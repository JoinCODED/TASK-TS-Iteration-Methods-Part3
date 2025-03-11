/**
 * You can use these temperatures
 * to manually test your code
 */
const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

/**
 * `filterHighTemperatures` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns a new array containing temperatures greater than or equal to 25 degrees Celsius.
 * Example:
 *  filterHighTemperatures(temperatures); // => [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 25, 28, 29, 27, 26]
 */
function filterHighTemperatures(temps: number[]): number[] {
  // Your code here

  return temps.filter(x => x>= 25); // replace the empty array with what you see is fit
}

/**
 * `filterLowTemperatures` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns a new array containing temperatures less than 20 degrees Celsius.
 * Example:
 *  filterLowTemperatures(temperatures); // => [19, 18, 19, 19]
 */
function filterLowTemperatures(temps: number[]): number[] {
  // Your code here

  return temps.filter(x => x< 20); // replace the empty array with what you see is fit
}

/**
 * `convertCelsiusToFahrenheit` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Converts the entire list of temperatures to Fahrenheit using the formula (Celsius * 9/5) + 32.
 *  - Returns a new array containing temperatures in Fahrenheit.
 * Example:
 *  convertCelsiusToFahrenheit([25, 30, 20]); // => [77, 86, 68]
 */
function convertCelsiusToFahrenheit(temps: number[]): number[] {
  // Your code here
  const fehrenheit = temps.map(x => (x*(9/5)+32));

  return fehrenheit; // replace the empty array with what you see is fit
}

/**
 * `labelTemperatures` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns a new array labeling each temperature as:
 *    - "Warm" for temperatures >= 25
 *    - "Mild" for temperatures between 20 and 24
 *    - "Cool" for temperatures < 20
 * Example:
 *  labelTemperatures([25, 22, 18]); // => ["Warm", "Mild", "Cool"]
 */
type TemperatureLabel = "Warm" | "Mild" | "Cool";

function labelTemperatures(temps: number[]): TemperatureLabel[] {
  // Your code here
  return temps.map((x) => {
    if ( x>= 25)  return "Warm";
    else if (x>= 20) return "Mild";
    else return "Cool" ;
  })
   // replace the empty array with what you see is fit
}

/**
 * `getMaxTemperature` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns the highest temperature recorded in the list.
 * Example:
 *  getMaxTemperature([25, 30, 20]); // => 30
 */
function getMaxTemperature(temps: number[]): number {
  // Your code here
  let max = temps.reduce((x,y) => { return Math.max(x,y)})

  return max; // replace -1 with what you see is fit
}

/**
 * `getMinTemperature` function:
 *  - Accepts a "temps" parameter of type "number[]".
 *  - Returns the lowest temperature recorded in the list.
 * Example:
 *  getMinTemperature([25, 30, 20]); // => 20
 */
function getMinTemperature(temps: number[]): number {
  // Your code here
  let min = temps.reduce((x,y) => { return Math.min(x,y)})

  return min; // replace -1 with what you see is fit
}

export {
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
};
