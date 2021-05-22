//Import dependencies and classes
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');
const replace = require('replace');
const path = require('path');

//Store every id
const idArray = [];
//Store every object member
const employees = [];
//Store the member with its html format
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

//Prompt internQuestions
const internQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
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
        message: "What is your intern's id?",
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
        message: "What is your intern's email?",
        validate: answer => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)) {
                return true;
            }
            return "Please enter a valid email address."
        }

    },
    {
        type: "input",
        name: "school",
        message: "What is your intern's school?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return "Please enter at least one character."
        }
    },
];

//Prompt member loop
const memberTeam = [
    {
        type: "list",
        name: "member",
        message: "Which type of team member would you like to add",
        choices: [
            'Engineer',
            'Intern',
            'I dont to want to add any more team members'
        ]

    },
];

//Capitalize every word in a sentence
const capitalize(str){
    return finalSentence = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

//Ask if you want to add a new member
const promptForNewMember = () => {
    inquirer.prompt(memberTeam)
        .then(answer => {
            //Show the question to add a new engineer member
            if (answer.member === "Engineer") {
                promptForEngineer();
            //Show the question to add a new intern member    
            } else if (answer.member === "Intern") {
                promptForIntern();
            } else {
                //Create a html with the memebers added 
                renderOutput(employees);
                
            }

        })
};

//Show the question of manager on the terminal and create a manager class
const promptForManager = () => {
    inquirer.prompt(managerQuestion)
        .then(answer => {
            const name = capitalize(answer.name);
            const email = answer.email;
            //With the answer create a new manager object
            const newManager = new Manager(name, answer.id, email.toLowerCase(), answer.phone);
            employees.push(newManager);
            idArray.push(answer.id);
            //Call the prompt member to ask if you want to add a new member
            promptForNewMember();
        })
};

//Show the question of engineer on the terminal and create a engineer class
const promptForEngineer = () => {
    inquirer.prompt(engineerQuestion)
        .then(answer => {
            const name = capitalize(answer.name);
            const email = answer.email;
            const github = capitalize(answer.github);
            //With the answer create a new engineer object
            const newEngineer = new Engineer(name, answer.id, email.toLowerCase(), github);
            employees.push(newEngineer);
            idArray.push(answer.id);
            //Call the prompt member to ask if you want to add a new member
            promptForNewMember();
        })
};

//Show the question of intern on the terminal and create a intern class
const promptForIntern = () => {
    inquirer.prompt(internQuestion)
        .then(answer => {
            const name = capitalize(answer.name);
            const email = answer.email;
            const school = capitalize(answer.school);
            //With the answer create a new intern object
            const newIntern = new Intern(name, answer.id, email.toLowerCase(), school);
            employees.push(newIntern);
            //Call the prompt member to ask if you want to add a new member
            promptForNewMember();

        })
};

//Fill the html templates with the memebers added
function renderOutput(memberArray) {
    memberArray.forEach(member => {
        if (member.getRole() === "Manager") {
            const data = [member.getName(), member.getId(), member.getEmail(), member.getOfficeNumber()];
            const regexArray = ["name-manager", "id-manager", "email-manager", "phone-manager"];
            const srcURL = './src/manager.html';
            const destURL = './dist/manager-' + member.getId() + '.html';
            //Fill out manager html file with the object manager
            fileMember(srcURL, destURL, data, regexArray);   
        } else if (member.getRole() === "Engineer") {
            const data = [member.getName(), member.getId(), member.getEmail(), member.getGithub()];
            const regexArray = ["name-engineer", "id-engineer", "email-engineer", "github-engineer"];
            const srcURL = path.resolve(__dirname, './src/engineer.html');
            const destURL = path.resolve(__dirname, './dist/engineer-' + member.getId() + '.html');
            //Fill out engineer html file with the object engineer 
            fileMember(srcURL, destURL, data, regexArray);
        } else if (member.getRole() === "Intern") {
            const data = [member.getName(), member.getId(), member.getEmail(), member.getSchool()];
            const regexArray = ["name-intern", "id-intern", "email-intern", "school-intern"];
            const srcURL = path.resolve(__dirname, './src/intern.html');
            const destURL = path.resolve(__dirname, './dist/intern-' + member.getId() + '.html');
             //Fil intern html file with the object intern 
            fileMember(srcURL, destURL, data, regexArray);
        }

    });

    //Create a final html 
    fillIndex();


};

//Replace the info of every member in its template
function fileMember(srcURL, destURL, data, regexArray) {
    //Take the original template and create another with the info of the member
    createFile(srcURL, destURL);
    for (let i = 0; i < data.length; i++) {
          replace({
              regex: regexArray[i],
              replacement: data[i],
              paths: [destURL],
              recursive: false,
              silent: false,
          });  
    }
    //Add the updated template to array 
    memberInfoFinal.push(myfun(destURL));
};

//Create another with the info of the member
function createFile(srcURL, destURL) {
    fs.appendFile(destURL, '', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.copyFile(srcURL, destURL, (error) => {
        // incase of any error
        if (error) {
            console.error(error);
            return;
        }

        console.log("Copied Successfully!");
    });
};

//Start the functionality of application
const init = () => {
    //Show the question of manager on the terminal
    promptForManager();
};
init();
