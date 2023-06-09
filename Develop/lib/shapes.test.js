const{circle, square, triangle}  = require('./shapes.js');

describe( 'circle', () => {
  test('Creates a blue circle', () => {
    const expectedCircle = '<circle cx="150" cy="100" r="80" fill="blue" />'
    const testCircle = new circle();
    testCircle.setShapeColor('blue');
    const testSVG = testCircle.render();
    expect(testSVG).toEqual(expectedCircle);
  });
  })
  
  













