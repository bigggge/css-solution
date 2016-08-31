/**
 * main.js
 *
 * Created by xiepan on 16/8/31 11:44.
 */
function showSnackBar() {
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}