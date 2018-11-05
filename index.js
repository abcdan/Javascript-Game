// Load needed libraries, be sure do do npm install before running this code
const randomWords = require('random-words');
const request = require('request');
const colors = require('colors')

var word = randomWords()
console.log(`Picked word: ${word}`.yellow);
    url = `https://www.npmjs.com/package/${word}` // This is the URL that the request will use
    request(url, (err, res, body) => {
        if (res.statusCode === 404) { // This che
            console.log("Take a shot!".red) 
        }else{
            console.log(`You're lucky! The word is a NPM package!`.green)
        }
        })