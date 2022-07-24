
document.getElementById("submit-btn").addEventListener("click", function () {

    var height = document.getElementById("height").value;

    var width = document.getElementById("width").value;

    var area = "Area of the rectangle is " + (height * width) + " cm<sup>2</sup>";
    
    document.getElementById("answer").innerHTML = area;
});