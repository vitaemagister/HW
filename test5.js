var prompt = require('prompt');

prompt.start();

prompt.get(['measurment', 'amount'], function (err, result) {

switch (result.measurment) {
  case "hours":
    case "hour":
        console.log(result.amount * 60 + " minutes")
    break;
  case "kilometers":
    case "kilometer":
        case "km":
        console.log(result.amount * 1000 + " meters")
      break;
  case  "kilograms":
    case  "kilogram":
        case  "kg":
    console.log(result.amount * 1000 + " grams")
    break;
  default:
    console.log(`Please enter a valid mesurement like: hour/s kilometer/s/km or kilogram/s/kg`);
}

});
