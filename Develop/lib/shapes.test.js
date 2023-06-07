const{circle, square, triangle}  = require('./shapes.js');

describe( {circle}, () => {
  test('Creates a blue circle', () => {
    const expectedCircle = '<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>/>'
    const testCircle = new circle;
    testCircle.fill("blue");
    testCircle = testCircle.render();
    expect(testCircle).toEqual(expectedCircle);
  });
  })
  
  describe( {square}, () => {
    test('Creates a blue square', () => {
      const expectedSquare = '<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5" text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>/>'
      const testSquare = new circle;
      testSquare.fill("blue");
      testSquare = testSquare.render();
      expect(testSquare).toEqual(expectedSquare);
    });
    })  

    describe( {triangle}, () => {
      test('Creates a blue triangle', () => {
        const expectedTriangle = '<polygon points="200,10 250,190 160,210" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>/>'
        const testTriangle = new circle;
        testTriangle.fill("blue");
        testTriangle = testTriangle.render();
        expect(testTriangle).toEqual(expectedTriangle);
      });
      })  













