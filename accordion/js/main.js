/**
 * Created by xiepan on 16/8/25.
 */

var acc = document.getElementsByClassName("accordion");
var i;

window.onload = function () {
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}


