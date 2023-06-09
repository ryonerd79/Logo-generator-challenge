class svg {
    constructor() {
        this.textContent = ''

        this.shape = ''
    }
    logoText(text, textColor) {
        this.textContent = `<text x="150" y="125" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        ${this.shape} ${this.textContent}
         
        </svg>`
    }
    logoShape(shape) {
        this.shape = shape.render()
    } 
}

module.exports = svg