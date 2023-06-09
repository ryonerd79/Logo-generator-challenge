const { circle, square, triangle } = require('./shapes.js');

describe('circle', () => {
  test('Creates a blue circle', () => {
    const expectedCircle = '<circle cx="150" cy="115" r="80" fill="blue" />'
    const testCircle = new circle();
    testCircle.setShapeColor('blue');
    const testSVGCircleLogo = testCircle.render();
    expect(testSVGCircleLogo).toEqual(expectedCircle);
  });
})

describe('square', () => {
    test('Creates a blue square', () => {
      const expectedSquare = '<rect x="78" y="30" width="140" height="678" stroke="black" fill="blue" stroke-width="5" />'
      const testSquare = new square();
      testSquare.setShapeColor('blue');
      const testSVGSquareLogo = testSquare.render();
      expect(testSVGSquareLogo).toEqual(expectedSquare);
    });
  }) 

    describe('triangle', () => {
      test('Creates a blue triangle', () => {
        const expectedTriangle = '<polygon points="150,10 -1,200 320,230" fill="blue" />'
        const testTriangle = new triangle;
        testTriangle.setShapeColor('blue');
        const testSVGTriangleLogo = testTriangle.render();
        expect(testSVGTriangleLogo).toEqual(expectedTriangle);
      });
      })













