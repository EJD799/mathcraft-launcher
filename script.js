function generateRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}
var version;
//var username;
//var usernameBox = document.getElementById('usernameBox');
//usernameBox.value = "MathLearner" + generateRandom(9999);
function play() {
  version = document.getElementById("gameVersion").value;
  //username = usernameBox.value;
  top.location = version/* + "?username=" + username*/;
}
