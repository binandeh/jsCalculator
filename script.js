function clearing1() {
    document.getElementById('screen').value = null;
}
function clea1r() {
    alert(123123);
    console.log(document.getElementById('screen').value);
    //  document.getElementById('screen').value="";

}
function equal() {
    var val = document.getElementById('screen').value;
    document.getElementById('screen').value = eval(val);
}
function addToScreen(event) {
    document.getElementById('screen').value += event.target.value;
}

function addToScreenByVal(amountt) {
    document.getElementById('screen').value += amountt;
} 