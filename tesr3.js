var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['measurment', 'amount'], function (err, result) {
  //
  // Log the results.
  //
  if (result.measurment === ("hours" || "hour")){
    console.log(result.amount * 60 + " minutes")
  }
  else if (result.measurment === ("kilometers" || "km")){
    console.log(result.amount * 1000 + " meters")
  }
  else if (result.measurment === ("kilogram" || "kg")){
    console.log(result.amount * 1000 + " grams")
  }
  else {
    console.log("Введить доступні варіанти для measurment hour / km / kg")
  }

});