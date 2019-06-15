# travel-planner

Imagine you've been hired to write an app that will allow people to perform searches to know the distance between 2 points, to allow them to plan their travel.

The app should consist of a search form with two autocomplete inputs, one for the starting point and another for the ending point, date and number of passengers. When user submit the form he should be redirected to a separate page where the distance between two points should be showed. Also the results page should show all the data the user entered on the search page (start, end, date, number of passengers)

The app should allow deeplinking, which means that if the user reaches the application with some URL parameters, the app should pre-fill the form and perform the search based on those parameters. Deeplinking should work for both pages – the search form page and the results page.

The app should correctly display all the states: success, waiting for the input, loading, error, etc.
Technical Requirements
The app should be implemented as a SPA (single page application) using React as a view library. For storing the state you can use any library you like, but we are using Redux. You can use any styling solution you like, but we are using CSS in JS. To bundle the app use Webpack and write the code using ES6 with transpiling to ES5.

To implement autocomplete you can use Google API or hardcoded data. But make sure that the field provide a way to "search" places based on entered text and ask the user to select some found place from the "database".

The UI doesn't need to look good, but make sure that it is fully functional and fit all the requirements.

Please make your app available online using https://codesandbox.io/ or any similar platform.

You'll get bonus points if you:
- Use Flow
- Write Unit tests with Jest with good coverage
- Make your app reasonably decomposed to reusable components
