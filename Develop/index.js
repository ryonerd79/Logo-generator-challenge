const inquirer = require("inquirer");
const fs = require('fs')
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
        type: 'list',
        name: 'shapeColor',
        message: 'What color do you want for the shape?',
        choices: [
            'blue',
            'green',
            'maroon',
            'red',
        ]
    },

    {
        type: 'list',
        name: 'text',
        message: 'What text do you want for your shape',
        choices: [
            'SVG',
            'Yama Cars',
            'Naka Motors',
            'Waka Guitars'
        ]
    },

    {
        type: 'list',
        name: 'textColor',
        message: 'What color do you want for your text?',
        hoices: [
            'blue',
            'black',
            'green',
            'white'
        ]
    }
]

inquirer.prompt(questions)
.then((data) => {
    let shape
    if (data.shape === 'circle') {
        shape = new circle(data.text, data.color, data.shapeColor)
    }
    if (data.shape === 'circle') {
        shape = new square(data.text, data.color, data.shapeColor)
    }
    if (data.shape === 'circle') {
        shape = new triangle(data.text, data.color, data.shapeColor)
    }
})
