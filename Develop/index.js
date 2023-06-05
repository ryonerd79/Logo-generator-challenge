const inquirer = require("inquirer");

const {circle, square, triangle} = require("./lib/shapes");

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want?',
        choices: [
            'circle',
            'square',
            'triangle'
        ] 
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want for the shape?'
    },

    {
        type: 'input',
        name: 'text',
        message: 'What text do you want for your shape'
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want for your text?'
    }
]

inquirer.prompt(questions)
.then((data) => {
    let shape
    if (data.shape === 'circle') {
        shape = new circle(data.text, data.color, data.shapeColor)
    }
    
})
