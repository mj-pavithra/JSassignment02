
document.getElementById("submit-btn").addEventListener("click", function () {
    var nameInput = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
    var d = new Date(birthday);
    var currd = new Date();
    var age = currd.getFullYear() - d.getFullYear();
    if(nameInput==""){
        alert("Your age is " + age + " Years");
    }
    else{
        alert(nameInput + "'s age is " + age + " Years");
    }
    
});