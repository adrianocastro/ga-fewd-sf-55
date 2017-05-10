// wait for the DOM elements to load before executing
$(document).ready(function() {

  // // Listen for the form submit event
  $('#city-picker').submit(function() {
    // prevent the submit button from refreshing the page
    event.preventDefault();

    // find the city-type input from `this` form
    var city = $(this).find('#city-type');

    // get the value of the #city-type input and correct for capitalization
    var cityName = city.val();
    cityName = cityName.toLowerCase().trim();

    // Reset the value of the input to empty
    city.val('');

    // if the user inputs New York City / NYC / New York change the CSS class to 'nyc'
    if(cityName === 'new york city' || cityName === 'nyc' || cityName === 'new york') {
      $('body').attr('class','nyc');
    }
    // if the user inputs SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if (cityName === 'sf' || cityName === 'san francisco') {
      $('body').attr('class','sf');
    }
    // if the user inputs Austin/ATX change the CSS class to 'austin'
    else if (cityName === 'austin' || cityName === 'atx') {
      $('body').attr('class','austin');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if (cityName === 'los angeles' || cityName === 'la' || cityName === 'lax') {
      $('body').attr('class','la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if (cityName === 'sydney' || cityName === 'syd') {
      $('body').attr('class','sydney');
    }

  });

});