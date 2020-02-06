/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

var quotes = [];

quotes.push(
  {
    quote: "South Africa are the world champions.",
    source: "Richard Wong",
    citation: "Speech",
    year: 2019
  },

  {
    quote: "NZ came third.",
    source: "Jonathan Wong",
    citation: "Publication",
    year: 2018
  },

  {
    quote: "We are the champions.",
    source: "Freddie Mercury",
    citation: "Song",
    year: 1977
  },

  {
    quote: "England came runner up.",
    source: "Owen Farrell",
    citation: "Interview",
    year: 2017
  },

  {
    quote: "Next time maybe.",
    source: "Eddie Jones",
    citation: "Post match",
    year: 2020
  },

)

console.log(quotes);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
