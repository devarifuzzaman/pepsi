function show_pepsifirst() {
    document.getElementById('pepsi-img').src = "./img/pepsi001.png";
    document.getElementsByClassName('main')[0].style.backgroundColor = "teal";
    document.getElementById('content-h2').innerHTML = "Welcome to pepsi company limited";
}

function show_pepsisecond() {
    document.getElementById('pepsi-img').src = "./img/pepsi002.png";
    document.getElementsByClassName('main')[0].style.backgroundColor = "green";
    document.getElementById('content-h2').innerHTML = "This Is Diet Pepsi";

}

function show_pepsithird() {
    document.getElementById('pepsi-img').src = "./img/pepsi003.png";
    document.getElementsByClassName('main')[0].style.backgroundColor = "#a5724d";
    document.getElementById('content-h2').innerHTML = "This Is Zero Sugar Pepsi";
}
