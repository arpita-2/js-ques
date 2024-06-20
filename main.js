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

//area of equilateral triangle

function calculateEquilateralArea() {
  const side = parseFloat(document.getElementById("numberArea").value);

  const areaOfEquilateral = (Math.sqrt(3) / 4) * side ** 2;
  document.getElementById("equilateralArea").textContent =
    "Area of Equilateral: " + areaOfEquilateral;
}

//perimeter of circle
function calculatePerimeterOfCircle() {
  const radiusOfCircle = parseFloat(
    document.getElementById("perimeterCircle").value
  );
  const perimeterOfCircle = 2 * Math.PI * radiusOfCircle;

  document.getElementById("circlePerimeter").textContent =
    "Perimeter of Circle: " + perimeterOfCircle;
}

//perimeter of equilateral triangle

function calculatePerimeterOfEquilateral() {
  const sideOfEquilateral = parseFloat(
    document.getElementById("perimeterEquilateral").value
  );
  const perimeterOfEquilateral = 3 * sideOfEquilateral;

  document.getElementById("equilateralPerimeter").textContent =
    "Perimeter of Equilateral Triangle: " + perimeterOfEquilateral;
}

//perimeter of  paralellogram

function calculatePerimeterOfParalellogram() {
  const sideOfParalellogram = parseFloat(
    document.getElementById("sideParalellogram").value
  );

  const baseOfParalellogram = parseFloat(
    document.getElementById("baseParalellogram").value
  );
  const perimeterOfParalellogram =
    2 * (sideOfParalellogram + baseOfParalellogram);

  document.getElementById("paralellogramPerimeter").textContent =
    "Perimeter of paralellogram: " + perimeterOfParalellogram;
}

//perimeter of Rectangle

function calculatePerimeterOfRectangle() {
  const lengthRectangle = parseFloat(
    document.getElementById("lengthRectangle").value
  );
  const widthRectangle = parseFloat(
    document.getElementById("widthRectangle").value
  );

  const perimeterRectangle = 2 * (lengthRectangle + widthRectangle);
  document.getElementById("rectanglePerimeter").textContent =
    "Perimeter of Rectangle: " + perimeterRectangle;
}

//perimeter of Square

function calculatePerimeterOfSquare() {
  const sideSquare = parseFloat(document.getElementById("sideSquare").value);

  const perimeterSquare = 4 * sideSquare;
  document.getElementById("squarePerimeter").textContent =
    "Perimeter of Square: " + perimeterSquare;
}

//perimeter of rhombus
// const calculatePerimeterButton = document.getElementById(
//   "calculatePerimeterRhombus"
// );
// calculatePerimeterButton.addEventListener("click", () => {

//   const value = document.getElementById("sideRhombus").value;

function calculatePerimeterOfRhombus() {
  const sideRhombus = parseFloat(document.getElementById("sideRhombus").value);

  const perimeterRhombus = 4 * sideRhombus;
  document.getElementById("rhombusPerimeter").textContent =
    "Perimeter of Rhombus: " + perimeterRhombus;
}

//volume of cone
function calculateVolumeCone() {
  const radiusCone = parseFloat(document.getElementById("radiusCone").value);
  const heightCone = parseFloat(document.getElementById("heightCone").value);

  const volumeOfCone = (Math.PI * radiusCone ** 2 * heightCone) / 3;
  document.getElementById("coneVolume").textContent =
    "Volume of Cone: " + volumeOfCone;
}

//volume of prism
function calculateVolumePrism() {
  const basePrism = parseFloat(document.getElementById("basePrism").value);
  const heightPrism = parseFloat(document.getElementById("heightPrism").value);

  const volumeOfPrism = basePrism * heightPrism;
  document.getElementById("prismVolume").textContent =
    "Volume of Prism: " + volumeOfPrism;
}

//volume of Cylinder
function calculateVolumeCylinder() {
  const radiusCylinder = parseFloat(
    document.getElementById("radiusCylinder").value
  );
  const heightCylinder = parseFloat(
    document.getElementById("heightCylinder").value
  );

  const volumeOfCylinder = Math.PI * radiusCylinder ** 2 * heightCylinder;
  document.getElementById("cylinderVolume").textContent =
    "Volume of Cylinder: " + volumeOfCylinder;
}

//volume of sphere
function calculateVolumeSphere() {
  const radiusSphere = parseFloat(
    document.getElementById("radiusSphere").value
  );

  const volumeOfSphere = (4 / 3) * Math.PI * radiusSphere ** 3;
  document.getElementById("sphereVolume").textContent =
    "Volume of Sphere: " + volumeOfSphere;
}

//volume of pyramid
function calculateVolumePyramid() {
  const lengthPyramid = parseFloat(
    document.getElementById("lengthPyramid").value
  );

  const widthPyramid = parseFloat(
    document.getElementById("widthPyramid").value
  );

  const heightPyramid = parseFloat(
    document.getElementById("heightPyramid").value
  );

  const volumeOfPyramid = (lengthPyramid * widthPyramid * heightPyramid) / 3;
  document.getElementById("pyramidVolume").textContent =
    "Volume of Pyramid: " + volumeOfPyramid;
}
