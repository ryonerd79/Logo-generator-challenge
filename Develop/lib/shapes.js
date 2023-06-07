class shape {
    constructor() {
        this.shapeColor = ''
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor
    }
}
class circle extends shape {

    //<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class square extends shape {
    
    render() {
        return `
        
       <rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        
       `
    }
}

class triangle extends shape {
    
    render() {
        return `
        <polygon points="200,10 250,190 160,210" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
      `
    }
}

module.exports = { circle, square, triangle }       