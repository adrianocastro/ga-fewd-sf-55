// Wait for whole DOM to load before doing anything
$(document).ready(function(){
  // execute the whole code below

  // on form submit
  $('#city-picker').submit(function() {
    // Tell the browser not to run the default behaviour
    // for the form submit

    // prevent default behavior
    event.preventDefault();

    var city = $('#city-type');

    // read user entered city
    var cityName = city.val();
    // address user input inconsistencies simplify logic
    //   - change to lower case
    //   - remove white space
    cityName = cityName.toLowerCase().trim();

    // reset the value of the input to empty
    city.val('');

    // update bg to match city
    // 
    // Business Logic:
    // - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    // - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    // - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
    // - "Austin" or "ATX" make the background of the page austin.jpg
    // - "Sydney" or "SYD" make the background of the page sydney.jpg

    // Find any existing classes and remove them
    var existingBodyClasses = $('body').attr('class');
    $('body').removeClass(existingBodyClasses);

    switch (cityName) {
      // Stack cases to combine conditions
      case 'sf':
      case 'san francisco':
      case 'bay area':
        $('body').addClass('sf');
        break;
      case 'nyc':
      case 'new york city':
      case 'new york':
        $('body').addClass('nyc');
        break;
      case 'lax':
      case 'la':
      case 'los angeles':
        $('body').addClass('la');
        break;
      case 'austin':
      case 'atx':
        $('body').addClass('austin');
        break;
      case 'sydney':
      case 'syd':
        $('body').addClass('sydney');
        break;
      case undefined:
        // Alert if no city was entered
        alert('City name can not be empty.');
        break;
      default:
        // Alert if city is not supported
        alert('City is not supported at this time.');
    }
  });


});

