//area of circle program
function calculateCircleArea() {
  const radius = parseFloat(document.getElementById("circleRadius").value);
  const area = Math.PI * radius ** 2;
  document.getElementById("circleArea").textContent =
    "Area of the circle: " + area.toFixed(2);
}
