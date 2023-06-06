class shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color
    }
}
class circle extends shape {

    
    render() {
        return `

      <circle cx="150" cy="100" r="80" fill="${this.color}" />
     
    
    `
    }
}

class square extends shape {
    
    render() {
        return `
        
       <rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.color}" stroke-width="5"/>
        
       `
    }
}

class triangle extends shape {
    
    render() {
        return `
        <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
      `
    }
}

module.exports = { circle, square, triangle }       