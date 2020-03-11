// Only change code below this line
class Thermostat {
  constructor(temperature) {
    this._temperature = temperature;
  }

  get temperature() {
    return ((this._temperature - 32) * 5) / 9;
  }

  set temperature(updateTemp) {
    this._temperature = updateTemp;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature - 32; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
