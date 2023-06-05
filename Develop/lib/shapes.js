class circle {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
    
    </svg>`  
    }
}

class square {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }
    render() {
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
       <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
        
       </svg>`
    }
}

class triangle {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg height="210" width="500">
        <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
      </svg>` 
    }
}

module.exports = {circle, square, triangle}       