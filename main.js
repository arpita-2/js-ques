//area of circle program
function calculateCircleArea() {
  const radius = parseFloat(document.getElementById("circleRadius").value);
  const area = Math.PI * radius ** 2;
  document.getElementById("circleArea").textContent =
    "Area of the circle: " + area.toFixed(2);
  //The parseFloat part of the code does this conversion from text to a number. Specifically, it looks at the
  //text that the user typed into the box named "circleRadius" and tries to interpret it as a number.
}

//area of triangle
function calculateTriangleArea() {
  const breadth = parseFloat(document.getElementById("numberBreadth").value);
  const height = parseFloat(document.getElementById("numberHeight").value);
  const areaOfTriangle = 0.5 * breadth * height;
  document.getElementById("triangleArea").textContent =
    "Area of Triangle: " + areaOfTriangle;
}

//area of rectangle
function calculateRectangleArea() {
  const width = parseFloat(document.getElementById("numberWidth").value);
  const length = parseFloat(document.getElementById("numberLength").value);
  const areaOfRectangle = width * length;
  document.getElementById("rectangleArea").textContent =
    "Area of Rectangle: " + areaOfRectangle;
}

//area of Isoceles Triangle
function calculateIsocelesArea() {
  const base = parseFloat(document.getElementById("numBaseIsoceles").value);
  const heightOfIsoceles = parseFloat(
    document.getElementById("numHeightIsoceles").value
  );
  const areaOfIsocelesTriangle = 0.5 * base * heightOfIsoceles;
  document.getElementById("isocelesArea").textContent =
    "Area of  Isoceles Triangle: " + areaOfIsocelesTriangle;
}

//area of paralellogram
function calculateParallelogramArea() {
  const baseOfParalellogram = parseFloat(
    document.getElementById("numBase").value
  );
  const heightOfParalellogram = parseFloat(
    document.getElementById("numHeightPara").value
  );
  const areaOfParalellogram = baseOfParalellogram * heightOfParalellogram;
  document.getElementById("parallelogramArea").textContent =
    "Area of Paralellogram: " + areaOfParalellogram;
}

//area of Rhombus
function calculateRhombusArea() {
  const diagonalOne = parseFloat(document.getElementById("numDiagonal1").value);
  const diagonal2 = parseFloat(document.getElementById("numDiagonal2").value);
  const areaOfRhombus = 0.5 * diagonalOne * diagonal2;
  document.getElementById("rhombusArea").textContent =
    "Area of Rhombus: " + areaOfRhombus;
}
