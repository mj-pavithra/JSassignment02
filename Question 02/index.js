const d = new Date();

let time = "Now the time is " + (d.getHours() - 12) + ":" + d.getMinutes() + ":" + d.getSeconds();

let remainingtime = (23 - d.getHours()) + " Hours and " + (59 - d.getMinutes()) + " Minutes more";

if (d.getHours() >= 12) {
    time += " p.m.";
} else {
    time += " a.m.";
}

document.getElementById("time").innerHTML = time;

document.getElementById("submit-btn").innerHTML = remainingtime;