/**
 * main.js
 *
 * Created by xiepan on 16/8/26 14:33.
 */

function filter() {

    var input, filter, ul, li, a, i;
    input = document.getElementById('my-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("my-ul");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}