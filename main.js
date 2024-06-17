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
  document.getElementById("TriangleArea").textContent =
    "Area of Triangle: " + areaOfTriangle;
}
