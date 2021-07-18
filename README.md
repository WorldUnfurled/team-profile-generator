# team-profile-generator

## Table of Contents
[1. Description](#description)

[2. Installation](#installation)

[3. Usage](#usage)

[4. Tests](#tests)

[5. Links](#links)

## Description

Command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

https://user-images.githubusercontent.com/80599137/126053611-514b4868-5ea1-4a5b-aae5-292333f818a4.mp4

## Installation

Run `npm init -y` for package.json initialization.
Use `npm i` to install jest and inquirer. 

## Usage

Use `node index.js` to receive the first prompt.
You will be asked a set of non-unique employee questions regardless of which subclass you chose. 
Depending on which role you chose to create, you will be asked a special question unique to the subclass.
After going through all the questions for your choice, you will be prompted with the same initial question of which role you want to create.
At any time, you can exit the program, and an html page will be generated in the _dist_ folder with the cards added to a template.
The html page can be viewed with a live server extension.

## Tests

Jest is used to make sure the functions specified in the Employee class and various subclasses work.
To run the tests, use `npm test`. 
Make sure the test key in the script object has the value `jest`.

## Links

https://github.com/WorldUnfurled/team-profile-generator

## E-Signature

Brooks Gunn :)
