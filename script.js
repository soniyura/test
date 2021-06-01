var arrSuit = ["&#9829", "&#9830", "&#9827", "&#9824"]

var tern = document.getElementsByClassName("tern")
var allside = document.getElementsByClassName("allside")


function start(){
    for (var i = 0; i < 6; i++){
        var temp = Math.floor(Math.random() * 4)

        allside[i].innerHTML = arrSuit[temp]

        if (arrSuit[temp] == "&#9829" ||
            arrSuit[temp] == "&#9830") {
            allside[i].style.color = "red"
        }else{
            allside[i].style.color = "black"
        }
    }

    for (var i = 0; i < 3; i++){
        tern[i].style.transform = "rotateX(7200deg)"
    }
}

