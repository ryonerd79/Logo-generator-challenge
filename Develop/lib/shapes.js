class shape {
    constructor() {
        this.shapeColor = ''
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor
    }
}
class circle extends shape {

    
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class square extends shape {
    
    render() {
        return `
        
       <rect x="78" y="30" width="140" height="678" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>
       
        
       `
    }
}

class triangle extends shape {
    
    render() {
        return `
        <polygon points="150,10 -1,200 320,230" "fill:${this.shapeColor} style="fill:purple;stroke:purple;stroke-width:1/>
        
      `
    }
}

module.exports = { circle, square, triangle }       