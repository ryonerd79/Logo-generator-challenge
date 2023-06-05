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

    }
}

class triangle {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }
    render() {
        
    }
}

module.exports = {circle, square, triangle}       