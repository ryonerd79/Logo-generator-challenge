const inquirer = require("inquirer");
const {writeFile} = require('fs/promises')
const {circle, square, triangle} = require("./lib/shapes.js");
const svg = require("./lib/svg.js")
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
        choices: [
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
        shape = new circle()
    }
    if (data.shape === 'square') {
        shape = new square()
    }
    if (data.shape === 'triangle') {
        shape = new triangle()
    }
    shape.setShapeColor(data.shapeColor)
    const svgShape = new svg()
    svgShape.logoText(data.text, data.textColor)
    svgShape.logoShape(shape)
return writeFile('logo.svg', svgShape.render())
})
