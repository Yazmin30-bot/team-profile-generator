//Import dependencies and classes
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');
const replace = require('replace');
const path = require('path');

const idArray = [];
const employees = [];
const memberInfoFinal = [];

//Prompt managerQuestions
const managerQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return "Please enter at least one character."
        }

    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's id?",
        validate: answer => {
            if (/^[0-9]+$/.test(answer)&&idArray.indexOf(answer)===-1) {
                return true;
            }
            return "Please enter at least one character"
        }

    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        validate: answer => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)) {
                return true;
            }
            return "Please enter a valid email address."
        }

    },
    {
        type: "input",
        name: "phone",
        message: "What is the team manager's office number?",
        validate: answer => {
            if (/^[0-9]+$/.test(answer)) {
                return true;
            }
            return "Please enter at least one character"
        }
    },


];

//Prompt engineerQuestions
const engineerQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return "Please enter at least one character."
        }

    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's id?",
        validate: answer => {
            if (/^[0-9]+$/.test(answer)&&idArray.indexOf(answer)===-1) {
                return true;
            }
            return "Please enter at least one character"
        }

    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
        validate: answer => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)) {
                return true;
            }
            return "Please enter a valid email address."
        }

    },
    {
        type: "input",
        name: "github",
        message: "What is your engineer's GitHub username?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return "Please enter at least one character."
        }

    },

];