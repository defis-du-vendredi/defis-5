console.log('hello');
const direction = ["up", "down", "left", "right"];

var ON = false;

// event listener
var power = document.getElementById('onOff');
let controls = document.getElementsByClassName('move');

// screen var
var screen = document.getElementById('main');
var x = 40;
var y = 35;
// perso var
var perso = document.getElementById('sprite');

power.onchange = (e) => {
    if (e.target.checked) {
        ON = true;
        power.parentElement.style.marginLeft = "10px";
        // power.children firstChild.style.marginLeft = "15px";
        // display
        // screen.style.backgroundColor = "#e15";
        screen.style.backgroundImage = "url('./ville.png')";
        // screen.style.backgroundRepeat = "no-repeat";
        screen.style.backgroundPosition = `${x}% ${y}%`;
        setTimeout(function () {
            perso.style.visibility = "visible";
        }, 500);
    }
    else {
        ON = false;
        power.parentElement.style.marginLeft = "0px";
        // close display
        screen.style.backgroundColor = "#929d97";
        screen.style.backgroundImage = "";
        screen.style.backgroundPosition = "";
        perso.style.visibility = "hidden";
    }
}

for (var i = 0; i < controls.length; i++) {
    controls[i].onclick = (e) => {
        // on recup la direction voulu
        array1 = e.target.className;
        array2 = e.target.parentNode.className;
        var classes = [array1 + " " + array2];
        console.log(classes);
        classes = classes[0].split(" ");
        console.log(classes);
        let dir = classes.find(function (nombre) {
            return direction.includes(nombre);
        })
        // on ajoute la class pour lraniamtion
        perso.classList.add(dir);
        setTimeout(function () {
            perso.classList.remove(dir);
        }, 500);
        // on fait bouger le bg
        switch (dir) {
            case 'left':
                if (x - 15 > -40) {
                    x -= 15;
                }
                break;
            case 'right':
                if (x + 15 < 140) {
                    x += 15;
                }
                break;
            case 'up':
                if (y - 15 > -35) {
                    y -= 15;
                }
                break;
            case 'down':
                if (y + 15 < 120) {
                y += 15;
                }
                break;
            default:
                alert('error');
        }
        screen.style.backgroundPosition = `${x}% ${y}%`;
    }
}